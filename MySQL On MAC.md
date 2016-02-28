Download MYSQL:

You need  to download and install Mysql on your mac.

1. Go to the MySQL site (http://dev.mysql.com/downloads/mysql/), scroll down the page and look for version Mac OS X ver. 10.9 (x86, 64-bit), DMG Archive. Click the blue download button.

This will take you to a page that asks you to login or signup. You don’t have to signup, instead there is a link right below these buttons. Click the link “No thanks, just start my download.” This will start the download.

2. After downloaded you will need to install all 3 of the components in the package.

Double-click on the package to install it.

mysql-5.6.23-osx10.8-x86_64.pkg – MySQL software

Here are the three basic commands to start, stop, and restart MySQL in OS X, including Yosemite. Be sure to enter the command onto a single line, sudo obviously requires an administrator password to be entered.

Start MySQL

sudo /usr/local/mysql/support-files/mysql.server start

Stop MySQL

sudo /usr/local/mysql/support-files/mysql.server stop

Restart MySQL

sudo /usr/local/mysql/support-files/mysql.server restart

Resetting Your Forgotten MySQL Password

Stopping MySQL
First stop the service.  You can either do this using the preference pane if you have that installed if you don’t, your likely well aware of doing it from the terminal. Though this should work for most users.

sudo /usr/local/mysql/support-files/mysql.server stop

You can restart using:

sudo /usr/local/mysql/support-files/mysql.server start

Skipping Access Tables
Alright – so open up a Terminal window and execute:

/usr/local/mysql/bin/safe_mysqld --skip-grant-tables

For MySQL 5 Installations do:
/usr/local/mysql/bin/mysqld_safe --skip-grant-tables

Running the Reset
Ok – so you have safe_mysqld running in one Terminal window, now open up another one and execute “/usr/local/mysql/bin/mysql mysql” (no quotes).  If you aren’t familiar you are opening up the MySQL console and opening the mysql table.

Write the reset query into the console as follows:

UPDATE user SET Password=PASSWORD('YOUR_PASSWORD')
WHERE Host='localhost' AND User='root';

Replacing “YOUR_PASSWORD” with your desired password of course.  Once you’ve done that just exit the console “exit;” close the safe_mysqld execution and restart your MySQL server in normal mode.

How to add “mysql” to the $PATH Environment Variable on OS X:

1) launch Terminal (assuming it’s a bash shell)
2) write ‘echo $PATH’ to see what your path is now
3) if ‘mysql’ isn’t in there, write in the path to where you installed it via this command:
‘export PATH=/Users/your_user_name/your_path_to_mysql/mysql/bin:$PATH >> ~/.bash_profile’
4) that should add it to your bash_profile
5) write ‘echo $PATH’ again, you should see ‘mysql’ in there

Successful console login shows the following which includes the mysql server version.

Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 1432
Server version: 5.5.9-log Source distribution

Copyright (c) 2000, 2010, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
You can also check the mysql server version directly by executing the following command:

$ mysql --version
You may also check the version information from the mysql console itself using the version variables:

mysql> SHOW VARIABLES LIKE "%version%";
Output will be something like this:

+-------------------------+---------------------+
| Variable_name           | Value               |
+-------------------------+---------------------+
| innodb_version          | 1.1.5               |
| protocol_version        | 10                  |
| slave_type_conversions  |                     |
| version                 | 5.5.9-log           |
| version_comment         | Source distribution |
| version_compile_machine | i386                |
| version_compile_os      | osx10.4             |
+-------------------------+---------------------+
7 rows in set (0.01 sec)
The STATUS command display version information as well.

mysql> STATUS
