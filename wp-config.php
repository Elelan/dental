<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'sql6439872' );

/** MySQL database username */
define( 'DB_USER', 'sql6439872' );

/** MySQL database password */
define( 'DB_PASSWORD', 'YQ85KbuyaG' );

/** MySQL hostname */
define( 'DB_HOST', 'sql6.freemysqlhosting.net' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '?x65}#dQ8!bwT#cs0_|7j69vRB3Yy141xgk{q%Q5lG+tZa@%>j3JM+-~LeYGmjH!');
define('SECURE_AUTH_KEY',  '}:PT!c[{3s[k/H[NR1Uv<)3a_%P`JV0Vf<l|vqk=>&2B|t+w;ghcH9{hHPm{IAuR');
define('LOGGED_IN_KEY',    'Esi1L&O)wYg^LvpM!,oq,RI;hLfBE1vs+{FO~BSA;]h+d<z}[<p%.B-#4gRnr4oc');
define('NONCE_KEY',        'PvitMc|]Rz3&C`BkV%E(o6sw#pK(,LF%n?xF7|dF-^[BzAkh+SGs%@cSzF|)qyGa');
define('AUTH_SALT',        'k:-2T@X[YN|Z 4E|V0a*.;0S6I@,%-I>*!-L,SJ7oUIFukvg?3@dMZf74ZX+D4P1');
define('SECURE_AUTH_SALT', 'Y?K;+K(hwq+ndisfgo?/9;*pG<v;V<lq=F9FORpMT{DD8nJEG4IYpz-$Q7[Xm|9{');
define('LOGGED_IN_SALT',   'c/g69|p1E{Lg={iiUciv)cB2Dv_Z@k3;Z-HCo._aMV)H5St9)D!Hc4(2&g5w3kWg');
define('NONCE_SALT',       ':hqdMt+a|iz?9WF]Rg.>zU(1W2w-c(H<F7zZULmv>T|-+14sf|}J.?j+-|3GP x@');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
