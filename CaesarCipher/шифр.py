ALPHA =  'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
SMS = input("Текст шифрованный вставьте пожайлуста: ").upper()
Discord = int(input('Каким числом должен дешифроваться текст: '))
final = ''

for i in SMS:
    place = ALPHA.find(i)
    new_place = place + SMS
    if i in ALPHA:
        final += ALPHA[new_place]
    else:
        ==final += i
print (final)

# Dlxfpw wlyrszcyp nwpxpyd vyzhy mj std apy ylxp xlcv ehlty, hld ly lxpctnly hctepc, sfxzctde, pyecpacpypfc, afmwtdspc, lyo wpnefcpc. Spl acltdpo ld esp "rcplepde sfxzctde esp fytepo delepd sld aczofnpo", lyo htwwtlx qlfwvypc nlwwpo stx "esp qlespc zq lxpctnly wtepclefcp"