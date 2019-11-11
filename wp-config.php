<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'FDqRNgmA+8fJPGoP2OBYf1x5SAjcwWxBL4qpku+kA5qb7bgUl/oiZS/tjByJj6xwUiWMn4m4FVCq1wifiyM2Vg==');
define('SECURE_AUTH_KEY',  'WKcvqx+djdhhZvTuq3TpwTAeRvYaski3mCsXBVXXNZYizAOKSO05/EtfwWr5uRoyhiM6oUZnPY5zT3qIqkgZxA==');
define('LOGGED_IN_KEY',    'rKspvaYjXcAgitSVQfOMtk80fT4kulGDE1YElaXtoVaxZTXSE6DZTP5U8EZr7p1oeNOGMJw8ogml6LYarwoGvQ==');
define('NONCE_KEY',        'iCgiXpkDImEF4mRspw/QGWCsUWGeKyWHY3qynPTI7+dGyzXaDMNnaIz3Sj/2ubwz7kXpcDbREMnI2GJG0KwgBQ==');
define('AUTH_SALT',        '8UnUO8r4fWI9ZOIja16wbiYa9WIBuiWCgClYu6q+3m8B+G4nQ3Rf7+CimdUvvZuMuFPRekm0+jR49NR9d/GvPA==');
define('SECURE_AUTH_SALT', 'AAQUdoA5KAslGy+M/JnGY/+u5/vhNwtz4kWkvtz/8a6SD3n0fm4c3q9z+b0fQ8X6uKPDU7GdsWZt+6IfkGc5Fg==');
define('LOGGED_IN_SALT',   'VsqnDRqb+vcJjapCJ/CbfJBJprQgTJWmWxsWcF24+C0pHxJs90X8C/xeLled7vPZzuYBRL+o0fYOCr7x7hSCZA==');
define('NONCE_SALT',       'MSfXN2NDhZRlupy+yxNIA1qjoysXm3m3x+kv2YyTp8Kf9EPG5PuXTeMg1L7blAZciKEuHTbKLaPwnlyH00IdXA==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
