def frequency_analysis(ciphertext):
    # A dictionary to store the frequency of each letter in the ciphertext
    freq_dict = {}

    # Initialize the frequency dictionary
    for i in range(26):
        freq_dict[chr(ord('A') + i)] = 0

    # Count the frequency of each letter in the ciphertext
    for char in ciphertext:
        if char.isalpha():
            char = char.upper()
            freq_dict[char] += 1

    # Sort the frequency dictionary by frequency
    sorted_freq = [(k, v) for k, v in sorted(freq_dict.items(), key=lambda item: item[1], reverse=True)]

    return sorted_freq


def decrypt_vigenere(ciphertext):
    freq_dict = frequency_analysis(ciphertext)
    key_length = 1

    # Determine the key length using the index of coincidence method
    while key_length <= 10:
        shift = 0
        index_of_coincidence = 0
        for i in range(key_length):
            sub_cipher = ciphertext[i::key_length]
            sub_freq = frequency_analysis(sub_cipher)
            sub_index_of_coincidence = (
                        sum([freq * (freq - 1) for _, freq in sub_freq]) / (len(sub_cipher) * (len(sub_cipher) - 1)))
            index_of_coincidence += sub_index_of_coincidence
            shift += ord(sub_freq[0][0]) - ord('E')

        index_of_coincidence /= key_length
        if index_of_coincidence > 0.06:
            break
        key_length += 1

    # Decrypt the ciphertext
    key = [shift // key_length for _ in range(key_length)]
    plaintext = ''
    for i, char in enumerate(ciphertext):
        if char.isalpha():
            char = char.upper()
            shift = ord(char) - ord('A') - key[i % key_length]
            shift %= 26
            plaintext += chr(ord('A') + shift)
        else:
            plaintext += char

    return plaintext

ciphertext = "trxgcqsltsf kpgmjtxq ad xzw avsuemuw zj hjzxwuemfy trxgcqsltsf syh afqsjelxagy wqkeiek qvge frsmelgjtdwv lguwdw, mkp, haknpgkfvw, vtwjmaxagy, qgvtjaulxagy, sj vpwljfglazr. lzp fsktg hjtruaapwk zj afqsjelxagy wwufvalj mfuwyvw nsfxthwfemsdtxq, ayxwycmlq, lrv sgeadlfadtxq. uzrxaoifltedaec jwqijk es lzp tjgeiultsf gq wwfdmlagi afqsjelxagy jjgx fwayk vadgdgdiv lz yfsfxzgcmrwo tsjemwk. elak nef tp euztinwo xzjzyyz prujjtlazr, sunikk nsflcsdk, lrv gelwj diumcmlq xiskfvwk. trlwrvalj vwxpvk lz xzw avglpglazr gx trxgcqsltsf xcse myemlssjakiv usefypw. lztw ak lgugxtdadlwv eljgfkz lsi mkp sx vtkallp karrslfvwk, sekz qyfuemgfd, efv zxzwc xwusrgdzkawd xzse ifkfvw lsi smelwfemuaec sfo euufvsuj sx ayjgjxelazr. snlmdsmmdaec jwqijk es wfdyjayk lzlx smelgjtdwv fwwjd lsnp euupwk lz mfxzvesemgf lrv kjwlwxw ozpr lzpc fwph lzpq. lztw usy fw snggeapaksiv lsvgmrl vadeklpv jwnsnwcc hdlrfayk, jwoyfvlrl kjwlwxw, sfo slzpv ewlwmjpw lzlx wfdyjw elw uzrlayyalj sx gaijsemgfd. mf sohaltsf lz xzwdi hjtruaapwk, trxgcqsltsf kpgmjtxq swwg ayzgdgik jtwc elrsypqwfe, mfuthwfe vwkasfkp, efv nsehwmsfni oael dshw sfo vwyfpsltsfk. pjxwnxanp mfxzvesemgf diumcmlq ciimtvwk l ggeavwzprkagi shavgsnl lzlx ugywavpvk lsi fwphk gq xzw zvysymrsemgf, elw jtwck lwkgnmslph oael ald shwcelazrk, syh lzp qwsdyjwd rwwoiv lz tjgeiul lksaywl lsskw cmkcd."
plaintext = decrypt_vigenere(ciphertext)
print(plaintext)
