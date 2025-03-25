window.blacklister = window.blacklister || {};

(function () {
    window.blacklister.init = function () {
        const checkButton = document.getElementById('check-message-btn');
        checkButton.addEventListener("click", checkMessage, false);

        function checkMessage() {
            document.getElementsByClassName('blacklisted')[0].classList.add('hidden');
            document.getElementsByClassName('allowed')[0].classList.add('hidden');

            if (isBlacklisted() == true) {
                document.getElementsByClassName('blacklisted')[0].classList.remove('hidden');
            } else if (isBlacklisted() == false) {
                document.getElementsByClassName('allowed')[0].classList.remove('hidden');
            }
        }

        function isBlacklisted() {
            // Add your code here
            let blacklistedWords = document.getElementsByClassName("blacklisted-words")[0].value;
            // let blacklistedWords = ['advertising', 'sale', 'drug'];
            blacklistedWords = blacklistedWords.split(',').map(word => word.trim().toLowerCase());

            let message = document.getElementsByClassName("message")[0].value.toLowerCase();
            console.log(blacklistedWords, message)

            // if() {
            //     message.some((word) => {
            //         message.includes(word))
            // }
            let result = blacklistedWords.some((word) => {
                return message.includes(word);
            });

            console.log(result)
            return result;
        }
    }
})();
