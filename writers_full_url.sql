-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 04, 2022 at 01:05 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `israelhayom`
--

-- --------------------------------------------------------

--
-- Table structure for table `writers`
--

CREATE TABLE `writers` (
  `id` int(11) NOT NULL,
  `name` varchar(60) COLLATE utf8_bin NOT NULL,
  `image` text COLLATE utf8_bin NOT NULL,
  `article1` text COLLATE utf8_bin NOT NULL,
  `article2` text COLLATE utf8_bin NOT NULL,
  `article3` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `writers`
--

INSERT INTO `writers` (`id`, `name`, `image`, `article`) VALUES
(1, 'שוקי פרידמן', 'https://raw.githubusercontent.com/yair-roshal/Carousel-Node-CRUD-MySql-React/master/client/src/images/15688150479892_b-4.png', 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ' ),
(2, 'קרולין גליק', 'https://raw.githubusercontent.com/yair-roshal/Carousel-Node-CRUD-MySql-React/master/client/src/images/15688150479892_b-3.png', 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ' ),
(3, 'ערן בר-טל', 'https://raw.githubusercontent.com/yair-roshal/Carousel-Node-CRUD-MySql-React/master/client/src/images/15688150479892_b-2.png', 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית '   ),
(4, 'בועז ביסמוט', 'https://raw.githubusercontent.com/yair-roshal/Carousel-Node-CRUD-MySql-React/master/client/src/images/15688150479892_b-1.png', 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ' ),
(5, 'אמילי עמרוסי', 'https://raw.githubusercontent.com/yair-roshal/Carousel-Node-CRUD-MySql-React/master/client/src/images/15688150479892_b.png', 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית '  ),
(7, 'שוקי פרידמן', 'https://raw.githubusercontent.com/yair-roshal/Carousel-Node-CRUD-MySql-React/master/client/src/images/15688150479892_b-4.png', 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ' ),
(8, 'קרולין גליק', 'https://raw.githubusercontent.com/yair-roshal/Carousel-Node-CRUD-MySql-React/master/client/src/images/15688150479892_b-3.png', 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ' ),
(9, 'ערן בר-טל', 'https://raw.githubusercontent.com/yair-roshal/Carousel-Node-CRUD-MySql-React/master/client/src/images/15688150479892_b-2.png', 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית '   ),
(10, 'בועז ביסמוט', 'https://raw.githubusercontent.com/yair-roshal/Carousel-Node-CRUD-MySql-React/master/client/src/images/15688150479892_b-1.png', 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית '),
(11, 'אמילי עמרוסי', 'https://raw.githubusercontent.com/yair-roshal/Carousel-Node-CRUD-MySql-React/master/client/src/images/15688150479892_b.png', 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ' );

--
-- Indexes for dumped tables
--

--
-- Indexes for table `writers`
--
ALTER TABLE `writers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `writers`
--
ALTER TABLE `writers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
