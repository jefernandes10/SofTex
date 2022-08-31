public class Pessoa implements Serializable {/* Aqui fazemos com que a class Pessoa seja serializada */
    private int id;
    private String nome;  // TODOS OS TIPO PRIMITIVOS SÃO SERIALIZÁVEIS 
    private double salario //ATRIBUTOS
    private String senha
    }
    
    public Pessoa(int id, String nome, double salario, String senha) { /*para facilitar a instanciação da classe, 
    criou-se esse constructor*/
        this.setId(id);
        this.setNome(nome);
        this.setSalario(salario);
        this.setSenha(senha);
    }
    
    public int getId() { // ENCAPSULAMENTO
        return id;
    }
    
    public void setId(int id){
        this.id = id;
    }
    
    public String getSenha() {
        return senha;
    }
    
    public void setSenha(String senha){
        this.senha = senha;
    }
    
    public String getNome() {
        return nome;
    }
    
    public void setNome(String nome){
        this.nome = nome;
    }
    
    public double getSalario() {
        return salario;
    }
    
    public void setSalario(double salario) {
        this.salario = salario;
    }