# Cálculo del dígito verificador del RIF (Venezuela)

El RIF cuenta con un número verificador para evitar errores al escribirlo. En el caso del RIF este número se calcula usando el método del **Módulo 11**

## Pasos para el cálculo del dígito verificador

En el caso del método del **Módulo 11**:
1. se tiene que cada dígito se multiplica por un factor
2. Los resultados se suman
3. El resultado de la suma se divide entre 11 usando el módulo obteniendo el resto
4. Once (11) menos el resto da como resultado el número de comprobación

## El Factor

Bla bla

## Primer dígito del RIF

Al igual que la cédula de identidad, el primer dígito del RIF es una letra, para el cual se le asigna un valor para el cálculo del dígito verificador:


| Letra |           Uso         | Valor |
|-------|-----------------------|-------|
| V     | Venezolano            |   1   |
| E     | Extranjero            |   2   |
| P     | Extranjero sin Cédula |   3   |
| J     | Persona Jurídica      |   4   |
| G     | Entes Gubernamentales |   5   |
| C     | Consejo Comunal       |   6   |

Tomado de [Desde La Plaza](https://www.desdelaplaza.com/poder/por-que-ahora-se-usara-la-letra-c-en-el-rif/)