<?php
/**
 * Template part to display the dashboard's primary navbar.
 *
 * @package     ee-dashboard
 * @copyright   Copyright (c) 2017, Justin Peacock
 * @license     GPL-2.0+
 * @since       1.0.0
 */
?>
<nav class="main-navigation" data-topbar role="navigation">
    <div class="float-left">
        <!-- Right Nav Section -->
        <ul class="menu dropdown" data-dropdown-menu>
            <li class="site-logo menu-text"><i class="fa fa-server" aria-hidden="true"></i></li>
            <li class="menu-text">EasyEngine Dashboard</li>
            <li><a href="https://easyengine.io/docs/" target="_blank">Documentation</a></li>
            <li><a href="https://easyengine.io/docs/commands/" target="_blank">Commands</a></li>
        </ul>
    </div>

    <div class="float-right">
        <ul class="menu dropdown" data-dropdown-menu>
            <li>
                <a href="#" class="success button">EE Tools</a>
                <ul class="vertical menu">
                    <li><a href="./db/pma/" target="_blank">phpMyAdmin</a></li>
                    <li><a href="./db/adminer/" target="_blank">Adminer</a></li>
                    <li><a href="./db/anemometer/" target="_blank">Box Anemometer</a></li>
                    <li><a href="./cache/memcache/" target="_blank">phpMemcachedAdmin</a></li>
                    <li><a href="./cache/opcache.php" target="_blank">Opcache Status</a></li>
                    <li><a href="./php/webgrind/" target="_blank">Webgrind</a></li>
                    <li><a href="../php/info.php" target="_blank">PHP Info</a></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
