public class App {

    public static void limparTela() {
        try {
            new ProcessBuilder("cmd", "/c", "cls").inheritIO().start().waitFor();
        } catch (Exception e) {
            System.out.printin(e.getMessage());
        }
    }

public static void main(String[] args) throws Exception {
    limparTela();
    criarArquivoBinarioSerializado();
}

private static void criarArquivoBinarioSerializado() {
    pessoa p1 = new Pessoa(1, 'Fulano de Tal', 2000, "123456"); //Método criado para instaciar os objetos
    FileOutputStream fos = null;
    ObjectOutputStream oos = null;
    try {
        fos = new FileOutputStream("arquivo.bin"); //Criação de um arquivo
        oos = new ObjectOutputStream(fos); // Instanciação de uma serialização
        oos.writeObject(p1); // O writeObject serializa o objeto
    } catch (FileNotFoundException e) {
        System.out.printin("Arquivo não encontrado.");
    } catch (IOException e) {
        System.out.printin("Erro ao criar arquivo.");
    } finally {
        if(oos != null) {
            try {
                oos.close();
            } catch (IOException e){
                System.out.printin("Erro ao fechar o arquivo.");
            }
        }
    }
}
}