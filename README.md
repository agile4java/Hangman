* **MSSE 600 - Assignment Submission Document**

* **Name: Chad Conway**

* **Date: 10 / 17 / 2017**

* **I. Assignment Name: Hangman**

II. Learning Objectives: (here is an example)
=============================================

-   Draw gallows and stick person on canvas when player makes a wrong guess

-   Display an alphabet with events to remove characters that have been selected

-   Use an external script page to hold 5 categories of words with 10 words in
    each

-   Player clicks on alphabetical characters in an attempt to guess the current
    word

-   Player may select from five categories of words

>   III. **Abstract** –

-   Game screen consists of a "flex" design. Design includes:

    -   A title "header"

    -   3 "flex-items" positioned horizontally and will resize depending on
        screen resolution and size:

        -   The gallows canvas on the left.

        -   The "wordBlock" in the center displays first game categories, then
            the current word to be guessed

        -   An "alphabetBlock" furthest right which contains all letters of the
            alphabet initially. As the user clicks a selection, the letter is
            removed and either the letters are revealed in the current word. or
            another portion of the gallows is drawn with animation.

    -   Game consists of animation elements:

        -   Gallows-each section is drawn with animation.

        -   If the player loses, the stick figure in the gallows swings back and
            forth.

    -   Modals are used to indicate a win or loss. Closing the modal resets the
        game.

-   Game build is modular. Consisting of:

    -   Javascript files:

        -   **gameBoard.js:**

            -   *setup()* – Onload clears canvas and word blocks. Calls
                getCategory() for initial selection.

            -   *drawAlphabet()* – Fills the "alphabetBlock" flex item with the
                characters of the alphabet.

            -   *drawWord()* – Draws the current word to solve. Grayed boxes
                show spaces, and each new word, if multiple words, begins on a
                new line.

        -   **controller.js:**

            -   *getCategory()* – Reads **words.js** and displays the categories
                of words.

            -   *getWord() –* Selects random word from selected category.

            -   *letterChoic() –* Takes user selected character from
                alphabetBlock. Checks to see if the current word contains a
                match, if so reveals it. If not, calls *drawHangman().*

            -   *showWord()* – If player loses, reveals the unsolved characters
                of the current word.

        -   **animation.js:**

            -   *drawHangman() –* Draw next section of gallows or stick player.

            -   *endAnimation() –* If player loses, swings the stick player from
                the gallows.

**IV. Statement of Originality**
--------------------------------

>   This game is the original work of myself, programmatically and design-wise.
>   The coneptual framework for Hangman is the property of the whoever so holds
>   the current copyright, if any.

**V. Screen-shot of design document or application (also include a figure title and note for** 
-----------------------------------------------------------------------------------------------

![C:\\Users\\chadc_000\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\Screenshot (184).png](media/1baefd48e2805580c409d4a52f8e4fb8.png)

*Screenshot 1 – Index.html*

![C:\\Users\\chadc_000\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\Screenshot (185).png](media/2de959dcf48124376ee90e6d40ff9eb2.png)

*Screenshot 2 – gameboard.js*

![C:\\Users\\chadc_000\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\Screenshot (186).png](media/1aaba1c9edd5b58d0e7ccf4fa6ba3b8a.png)

*Screenshot 3 – words.js*

![C:\\Users\\chadc_000\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\Screenshot (187).png](media/f06854e99201de7be56f6ed47b2235d5.png)

*Screenshot 4 – style.css*

![C:\\Users\\chadc_000\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\Screenshot (188).png](media/498442298430e465f629657b3446c5c1.png)

*Screenshot 5 – controller.js function getCategory()*

![C:\\Users\\chadc_000\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\Screenshot (189).png](media/beec3eed37f453b75cc7603ce50efd79.png)

*Screenshot 6 – controller.js function getWord()*

![C:\\Users\\chadc_000\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\Screenshot (190).png](media/e1819bccbee4160fb1baa543d30f7556.png)

*Screenshot 7 – controller.js function letterChoice()*

![C:\\Users\\chadc_000\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\Screenshot (191).png](media/7b1f360055d298c7755f935fa63a9489.png)

>   *Screenshot 8 – controller.js function showWord() & showModal()*

![C:\\Users\\chadc_000\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\Screenshot (192).png](media/793fe70c618f74f480706dea4a502a9c.png)

*Screenshot 9 – animation.js function drawHangman()*

![](media/b2fa929ca0817d607a7ea11c3903c1da.png)

>   C:\\Users\\chadc_000\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\Screenshot
>   (194).png

>   *Screenshot 10 – animation.js function endAnimation()*

![C:\\Users\\chadc_000\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\Screenshot (195).png](media/113a1daa0e6f0a37e6e5ae87159c19ed.png)

*Screenshot 11 – Gameplay – Opening Screen*

![](media/0403433a552d2b7d65329065c01284c3.png)

>   C:\\Users\\chadc_000\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\Screenshot
>   (196).png

*Screenshot 12 – Gameplay – After category selection*

![](media/be2ef2217a024175fb583c81c65ea9c7.png)

>   C:\\Users\\chadc_000\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\Screenshot
>   (197).png

>   *Screenshot 13 – Gameplay during word guessing*

![](media/30454a1afb58a88be8ca7a7a785d248f.png)

>   C:\\Users\\chadc_000\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\Screenshot
>   (198).png

>   *Screenshot 14 – Gameplay winning modal*

![](media/d715fe7c6194de37c62d01eb9373361d.png)

>   C:\\Users\\chadc_000\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\Screenshot
>   (199).png

>   *Screenshot 15 – Gameplay first gallows animation*

![](media/cfb631f70c6b8a21074d0f872edae63c.png)

>   C:\\Users\\chadc_000\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\Screenshot
>   (200).png

>   *Screenshot 16 – Gameplay allows drawn, ready for stick figure*

![](media/2e6200a64738c604dea8adc6ece7fce3.png)

>   C:\\Users\\chadc_000\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\Screenshot
>   (201).png

>   *Screenshot 17 – Gameplay player lost, word revealed, gallows begins
>   swinging*

![](media/9c79e25fc41fc98ad9a2fd5969b26237.png)

>   C:\\Users\\chadc_000\\AppData\\Local\\Microsoft\\Windows\\INetCache\\Content.Word\\Screenshot
>   (203).png

>   *Screenshot 18 – Gameplay player lost, modal revealed after delay*
