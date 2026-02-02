$ cd ~/discovery_piscine/cell00

Predator@LAPTOP-MBM37ANP MINGW64 ~/discovery_piscine/cell00
$ cd ex03

Predator@LAPTOP-MBM37ANP MINGW64 ~/discovery_piscine/cell00/ex03
$ echo "ls -1 | wc -l" > count_files.sh

Predator@LAPTOP-MBM37ANP MINGW64 ~/discovery_piscine/cell00/ex03
$ chmod +x count_files.sh

Predator@LAPTOP-MBM37ANP MINGW64 ~/discovery_piscine/cell00/ex03
$ ./count_files.sh
1

Predator@LAPTOP-MBM37ANP MINGW64 ~/discovery_piscine/cell00/ex03
$ touch a b c
./count_files.sh
4
