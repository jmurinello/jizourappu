import java.util.List;

import com.atilika.kuromoji.TokenizerBase;
import com.atilika.kuromoji.ipadic.Token;
import com.atilika.kuromoji.ipadic.Tokenizer;

public class KuromojiExample {
  public static void main(String[] args) {
    Tokenizer tokenizer = new Tokenizer.Builder().mode(TokenizerBase.Mode.SEARCH).build();
    List<Token> tokens = tokenizer.tokenize(args[0]);
    for (Token token : tokens) {
      System.out.println(token.getSurface()); //+ "\t"
      //+ token.getAllFeatures());
    }
  }
}
