package br.com.sysbank;
//
//import java.util.Map;
//
//import org.springframework.context.annotation.Scope;
//import org.springframework.context.annotation.ScopedProxyMode;
//import org.springframework.stereotype.Component;
//
//import com.ibm.watson.developer_cloud.conversation.v1.ConversationService;
//import com.ibm.watson.developer_cloud.conversation.v1.model.MessageRequest;
//import com.ibm.watson.developer_cloud.conversation.v1.model.MessageResponse;
//
////import br.com.agillitas.twilio.SendSMS;
//
//@Component
//@Scope(value = "session", proxyMode = ScopedProxyMode.TARGET_CLASS)
//public class Conversation {
//	private ConversationService service;
//	private Map<String, Object> context;
//
//	public Conversation() {
//		init();
//	}
//
//	public void init() {
//		service = new ConversationService(ConversationService.VERSION_DATE_2016_09_20,
//				"298bf007-cba9-4337-a7b1-d111df54c1a6", "5QWIwMsYZAnL");
//		context = null;
//	}
//
//	// String = MessageResponse
//	public MessageResponse conversar(String frase) {	
//		MessageRequest request = new MessageRequest.Builder().context(context).inputText(frase).build();
//		MessageResponse resp = service.message("92cca8fe-60fd-41a7-9a5a-43803116ff0b", request).execute();
//		context = resp.getContext();
////		String JsonRetorno = resp.getTextConcatenated("");
//		
////		String fala = (String) resp.getContext().get("fala");
////		String sms = (String) resp.getContext().get("sms");
////		String codBarras = (String) resp.getContext().get("ligaCam");
////		
////		String acao = (String) resp.getContext().get("acao");
////		
////		System.out.println(acao);
////		
////		if(acao.equals("fala")){
////			
////			MyTTS sa = new MyTTS();
////			try {
////				JsonRetorno = "true|" + resp.getTextConcatenated("");
////				sa.salvarAudios(JsonRetorno);
////				return JsonRetorno;
////			} catch (Exception e) {
////				// TODO Auto-generated catch block
////				e.printStackTrace();
////			}
////			
////		}if(acao.equals("sms")){
////			System.out.println("SMS " + acao);// colocando SendSMS com parametro String ele responde duas vezes
////		//SendSMS ssms = new SendSMS();
////			try {
////				SendSMS.SendSMS();
//////				SendSMS.SendSMS();
////			} catch (Exception e) {
////				// TODO Auto-generated catch block
////				e.printStackTrace();
////			}
////
////		}if(acao.equals("ligaCam")){
////			JsonRetorno = acao;
////			return JsonRetorno;
////		}else{
////			JsonRetorno = "false |" + resp.getTextConcatenated("");
////		}
////		System.out.println(JsonRetorno);
////		return "ligaCam";
//		return resp;
//	}
//
//}

/////
import java.util.Map;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

import com.ibm.watson.developer_cloud.conversation.v1.ConversationService;
import com.ibm.watson.developer_cloud.conversation.v1.model.MessageRequest;
import com.ibm.watson.developer_cloud.conversation.v1.model.MessageResponse;


@Component
@Scope(value = "session", proxyMode = ScopedProxyMode.TARGET_CLASS)
public class Conversation {
	private ConversationService service;
	private Map<String, Object> context;

	public Conversation() {
		init();
	}

	public void init() {
		service = new ConversationService(ConversationService.VERSION_DATE_2016_09_20,
				"af4f73a7-cf6b-4363-8ee5-96b3a19dc623", "IZp4svTRAK47");
		context = null;
	}

	// String = MessageResponse
	public String conversar(String frase) {	
		MessageRequest request = new MessageRequest.Builder().context(context).inputText(frase).build();
		MessageResponse resp = service.message("4a849293-669f-4f5f-818b-73d0d29190ad", request).execute();
		context = resp.getContext();
		String JsonRetorno = "false|" + resp.getTextConcatenated("");
		
//		return resp.getTextConcatenated("");
		return JsonRetorno;
	}

}