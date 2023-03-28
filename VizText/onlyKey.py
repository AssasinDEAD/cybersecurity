def find_key_length(ciphertext):
    """
    Returns a list of likely key lengths for the given ciphertext.
    """
    distances = []
    for i in range(2, len(ciphertext)):
        chunks = [ciphertext[j:j+i] for j in range(0, len(ciphertext), i)]
        distance = sum([hamming_distance(chunks[j], chunks[j+1])/i for j in range(len(chunks)-1)])/len(chunks)
        distances.append((distance, i))
    return [x[1] for x in sorted(distances)][:3]

def hamming_distance(s1, s2):
    """
    Returns the Hamming distance between two equal-length strings.
    """
    return sum(c1 != c2 for c1, c2 in zip(s1, s2))

def find_key(ciphertext, key_length):
    """
    Returns the likely key for the given ciphertext and key length.
    """
    columns = [''] * key_length
    for i, c in enumerate(ciphertext):
        columns[i % key_length] += c
    key = ''
    for column in columns:
        frequencies = frequency_analysis(column)
        max_freq = max(frequencies.values())
        most_common = [char for char, freq in frequencies.items() if freq == max_freq]
        key_char = xor_against_most_common_english_letter(column, most_common)
        key += chr(key_char)
    return key

def frequency_analysis(text):
    """
    Returns a dictionary of letter frequencies for the given text.
    """
    frequencies = {chr(i): 0 for i in range(ord('A'), ord('Z')+1)}
    for c in text:
        if c.upper() in frequencies:
            frequencies[c.upper()] += 1
    return frequencies

def xor_against_most_common_english_letter(text, most_common):
    """
    Returns the XOR value used to encrypt the given text using the XOR cipher.
    """
    most_common_letter = most_common[0]
    most_common_letter_code = ord(most_common_letter)
    space_code = ord(' ')
    xor = most_common_letter_code ^ space_code
    return xor

def main(ciphertext):
    """
    Main function that finds the key of the given ciphertext using a Vigenère cipher.
    """
    key_lengths = find_key_length(ciphertext)
    for key_length in key_lengths:
        key = find_key(ciphertext, key_length)
        print(f"Key length: {key_length} Key: {key}")

if __name__ == '__main__':
    ciphertext = "trxgcqsltsf kpgmjtxq ad xzw avsuemuw zj hjzxwuemfy trxgcqsltsf syh afqsjelxagy wqkeiek qvge frsmelgjtdwv lguwdw, mkp, haknpgkfvw, vtwjmaxagy, qgvtjaulxagy, sj vpwljfglazr. lzp fsktg hjtruaapwk zj afqsjelxagy wwufvalj mfuwyvw nsfxthwfemsdtxq, ayxwycmlq, lrv sgeadlfadtxq. uzrxaoifltedaec jwqijk es lzp tjgeiultsf gq wwfdmlagi afqsjelxagy jjgx fwayk vadgdgdiv lz yfsfxzgcmrwo tsjemwk. elak nef tp euztinwo xzjzyyz prujjtlazr, sunikk nsflcsdk, lrv gelwj diumcmlq xiskfvwk. trlwrvalj vwxpvk lz xzw avglpglazr gx trxgcqsltsf xcse myemlssjakiv usefypw. lztw ak lgugxtdadlwv eljgfkz lsi mkp sx vtkallp karrslfvwk, sekz qyfuemgfd, efv zxzwc xwusrgdzkawd xzse ifkfvw lsi smelwfemuaec sfo euufvsuj sx ayjgjxelazr. snlmdsmmdaec jwqijk es wfdyjayk lzlx smelgjtdwv fwwjd lsnp euupwk lz mfxzvesemgf lrv kjwlwxw ozpr lzpc fwph lzpq. lztw usy fw snggeapaksiv lsvgmrl vadeklpv jwnsnwcc hdlrfayk, jwoyfvlrl kjwlwxw, sfo slzpv ewlwmjpw lzlx wfdyjw elw uzrlayyalj sx gaijsemgfd. mf sohaltsf lz xzwdi hjtruaapwk, trxgcqsltsf kpgmjtxq swwg ayzgdgik jtwc elrsypqwfe, mfuthwfe vwkasfkp, efv nsehwmsfni oael dshw sfo vwyfpsltsfk. pjxwnxanp mfxzvesemgf diumcmlq ciimtvwk l ggeavwzprkagi shavgsnl lzlx ugywavpvk lsi fwphk gq xzw zvysymrsemgf, elw jtwck lwkgnmslph oael ald shwcelazrk, syh lzp qwsdyjwd rwwoiv lz tjgeiul lksaywl lsskw cmkcd. "
    main(ciphertext)
