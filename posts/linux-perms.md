---
author: Marta Ortega Soto
date: '2023-09-12 15:20'
hero_image: /heros/norris-niman-iceland.jpg
title: New Perm Version
description: A rundown of linux Permissions
tags: ['linux', 'version', 'random']
---
## Viewing permissions
```bash
$ ls -lah
# -> l = long format
# -> a = include hidden files
# -> h = use units : byte, kilobyte, megabyte
```
Output : 
```txt
# -rw-r--r-- 1 user1 group1 62 Jan 15 16:10 myFile.txt
# drw-r--r-- 2 user1 group1 2048 Jan 15 17:10 Example
```

private :
```java
public class myClass {
    private String srt;
    private int number;

    public myClass(String str, int number){
        this.srt = srt;
        this.number = number;
    }
}
```

If the first character is a `d`,  the listed object is a directory, if it's a `-`, it's a regular file.

The letters `rwx` represent different permissions levels

| Permission | Files                | Directories            |
|----------| -------------------- | ---------------------- |
|     r      | can read the file    | can ls the directory   |
|     w      | can write the file   | can modify its content |
|     x      | can execute the file | can cd to the directory|

## Ownership
Permissions are grouped  into three sets that represent different level of ownership.
* The first set indicates the owner / user permissions
* The second, the group permissions
* The third set is for others  (anyone outside the group)

## Changing permissions
Add the following numbers to get the desired set of permissions : 

| Permission | Number |
|----------|------|
| read       | 4      |
| write      | 2      |
| execute    | 1      |

Examples :
```txt
# 6 = rw-
# 5 = r-x
```

Command for changing permissions :
```bash
$ chmod 751 myFile.txt
$ ls -lah
# Output : 
# rwxr-x--x 1 user1 group1 62 Jan 15 16:10 myFile.txt
```

Sources :

```bash
source ~/.zshrc
```
## Install on
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
asdf

Permisions : 
```bash
# tpm plugin
set -g @plugin 'tmux-plugins/tpm'

# list of tmux plugins
set -g @plugin 'christoomey/vim-tmux-navigator' # for navigating panes and vim/nvim with Ctrl-hjkl
set -g @plugin 'jimeh/tmux-themepack' # to configure tmux theme
set -g @plugin 'tmux-plugins/tmux-resurrect' # persist tmux sessions after computer restart
set -g @plugin 'tmux-plugins/tmux-continuum' # automatically saves sessions for you every 15 minutes

set -g @themepack 'powerline/default/cyan' # use this theme for tmux

set -g @resurrect-capture-pane-contents 'on' # allow tmux-ressurect to capture pane contents
set -g @continuum-restore 'on' # enable tmux-continuum functionality

# Initialize TMUX plugin manager (keep this line at the very bottom of tmux.conf)
run '~/.tmux/plugins/tpm/tpm'
```
