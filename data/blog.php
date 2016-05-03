<?php
    $title = 'Title';
    $copy = 'Lorem Ipsum';
    $blogList = array();

    $myblogs = simplexml_load_file('blog.xml');
    echo $myblogs->blog[0]->title;
?>