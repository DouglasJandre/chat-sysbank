package br.com.sysbank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.watson.developer_cloud.conversation.v1.model.MessageResponse;

//import br.com.agillitas.twilio.SendSMS;

@RestController
public class ConversationFacade {
	@Autowired
	private Conversation conversation;
	
	 @CrossOrigin(origins = "*")
	 @GetMapping("/conversa/{frase}")
	 public String conversar(@PathVariable String frase){
	 return conversation.conversar(frase);
	 }

//	 @CrossOrigin(origins = "*")
//	 @GetMapping("/conversa/{frase}")
//	 public String conversar(@PathVariable String frase){
//	 return conversation.conversar(frase);
//	 }

	 
//		@CrossOrigin(origins = "*")
//		@GetMapping("/conversa/{frase}")
//		public String conversar(@PathVariable String frase) {
//			String resp = conversation.conversar(frase);
//
//			String acao = (String) resp.getContext().get("acao");
//			String JsonRetorno = resp.getTextConcatenated("");
//
//			if (acao != "null" && acao.equals("fala")) {
//	
//				MyTTS sa = new MyTTS();
//				try {
//					JsonRetorno = "true |" + resp.getTextConcatenated("");
//					sa.salvarAudios(resp.getTextConcatenated(""));
//	
//				} catch (Exception e) {
//					// TODO Auto-generated catch block
//					e.printStackTrace();
//				}
//			}else if (acao != "null" && acao.equals("ligaCam")) {
				
//				JsonRetorno = acao;
				
//			}else if(acao != "null" && acao.equals("sms")){
//				String envioSMS = SendSMS.SendSMS(resp.getContext().get("sms").toString());
//				System.out.println("SMS " + acao);
////				SendSMS ssms = new SendSMS();
//					try {
////						resp.getContext().put("acao", "sms");
//						SendSMS.SendSMS("");
//					} catch (Exception e) {
//						// TODO Auto-generated catch block
//						e.printStackTrace();
//					}
//					
//			}else {
//				JsonRetorno = "false |" + resp.getTextConcatenated("");
//			}
//			return resp.getTextConcatenated("");
//		}
//	 
}
