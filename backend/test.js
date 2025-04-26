const sampleObj = {
    JAVA: "import java.util.Scanner;\n\npublic class Main {\n    public static String preprocess(String s) {\n        return s.replaceAll(\"[^a-zA-Z0-9]\", \"\").toLowerCase();\n    }\n\n    public static boolean isPalindrome(String s) {\n        s = preprocess(s);\n        int left = 0, right = s.length() - 1;\n\n        while (left < right) {\n            if (s.charAt(left) != s.charAt(right)) return false;\n            left++;\n            right--;\n        }\n\n        return true;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.nextLine();\n\n        boolean result = isPalindrome(input);\n        System.out.println(result ? \"true\" : \"false\");\n    }\n}",
    PYTHON: "class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        # Convert to lowercase and keep only alphanumeric characters\n        filtered_chars = [c.lower() for c in s if c.isalnum()]\n\n        # Check if it's a palindrome\n        return filtered_chars == filtered_chars[::-1]\n\n# Input parsing\nif __name__ == \"__main__\":\n    import sys\n    s = sys.stdin.readline().strip()\n\n    sol = Solution()\n    result = sol.isPalindrome(s)\n\n    print(str(result).lower())",
    JAVASCRIPT: "/**\n * @param {string} s\n * @return {boolean}\n */\nfunction isPalindrome(s) {\n  // Convert to lowercase and remove non-alphanumeric characters\n  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n\n  // Check if it's a palindrome\n  let left = 0;\n  let right = s.length - 1;\n\n  while (left < right) {\n    if (s[left] !== s[right]) {\n      return false;\n    }\n    left++;\n    right--;\n  }\n\n  return true;\n}\n\n// Add readline for dynamic input handling\nconst readline = require('readline');\nconst rl = readline.createInterface({\n  input: process.stdin,\n  output: process.stdout,\n  terminal: false\n});\n\n// Process input line\nrl.on('line', (line) => {\n  const result = isPalindrome(line);\n  console.log(result ? \"true\" : \"false\");\n  rl.close();\n});"
}



for(const [language , solutionCode] of Object.entries(sampleObj)){
    console.log(`Language: ${language}`);
    console.log(`Code:\n${solutionCode}`);
    console.log('-----------------------------------');    
}   