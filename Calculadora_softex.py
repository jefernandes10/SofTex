class calculadora_softex:
    
    def __init__(self, numero1, numero2, numero3):
        self.numero1 = numero1
        self.numero2 = numero2
        self.numero3 = numero3
    
    def soma(self):
        resultado = (self.numero1 + self.numero2) + self.numero3
        print(resultado)
    
    def subtrai(self):
        resultado = (self.numero1 - self.numero2) - self.numero3
        print(resultado)
    
    def multiplica(self):
        resultado = (self.numero1 * self.numero2 * self.numero3)
        print(resultado)
    
    def divide(self):
        resultado = (self.numero1 / self.numero2) / self.numero3
        print(resultado)
