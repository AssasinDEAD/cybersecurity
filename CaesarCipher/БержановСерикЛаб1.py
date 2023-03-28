# from collections import Counter
# ALPHA =  'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
# SMS = input("Текст шифрованный вставьте пожайлуста: ").upper()
#
# # Данный текст для шифровки: Dlxfpw wlyrszcyp nwpxpyd vyzhy mj std apy ylxp xlcv ehlty, hld ly lxpctnly hctepc,
# # sfxzctde, pyecpacpypfc, afmwtdspc, lyo wpnefcpc. Spl acltdpo ld esp "rcplepde sfxzctde esp fytepo delepd sld
# # aczofnpo", lyo htwwtlx qlfwvypc nlwwpo stx "esp qlespc zq lxpctnly wtepclefcp"
#
# letter_most_freq = Counter(SMS)
# print(letter_most_freq.most_common(2))
#
# # Шаг шифровки равен = 15
# # Шаг шифровки английская буква "Р" она 16 стоит в англ алфавите поэтому вводим число 15 так как отсчет с 0
#
# discord = int(input('Каким числом должен дешифроваться текст: '))
# final = ''
#
# for i in SMS:
#     place = ALPHA.find(i)
#     new_place = place + discord
#     if i in ALPHA:
#         final += ALPHA[new_place]
#     else:
#         final += i
#
# print (final)
#

print(32%26)