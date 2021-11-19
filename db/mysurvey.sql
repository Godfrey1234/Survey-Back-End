-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 19, 2021 at 08:07 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mysurvey`
--

-- --------------------------------------------------------

--
-- Table structure for table `favouritefood`
--

CREATE TABLE `favouritefood` (
  `contactNo` int(10) NOT NULL,
  `pizza` int(11) NOT NULL,
  `pasta` int(11) NOT NULL,
  `papAndWors` int(11) NOT NULL,
  `chicken` int(11) NOT NULL,
  `beef` int(11) NOT NULL,
  `other` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `favouritefood`
--

INSERT INTO `favouritefood` (`contactNo`, `pizza`, `pasta`, `papAndWors`, `chicken`, `beef`, `other`) VALUES
(656265656, 1, 1, 1, 0, 0, 0),
(731664529, 1, 1, 0, 0, 0, 0),
(737293765, 0, 0, 0, 0, 0, 0),
(764598774, 1, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `contactNo` int(10) NOT NULL,
  `lName` varchar(255) NOT NULL,
  `fName` varchar(255) NOT NULL,
  `Date` date NOT NULL,
  `age` int(11) NOT NULL,
  `meals` int(11) NOT NULL,
  `movie` int(11) NOT NULL,
  `tv` int(11) NOT NULL,
  `radio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`contactNo`, `lName`, `fName`, `Date`, `age`, `meals`, `movie`, `tv`, `radio`) VALUES
(656265656, 'mabena', 'atlegang', '2021-11-19', 18, 5, 2, 1, 1),
(731664529, 'mabena', 'Godfrey', '2021-11-19', 21, 1, 2, 5, 5),
(737293765, 'Mabena', 'OLGA', '2021-11-19', 34, 4, 4, 1, 1),
(764598774, 'maredi', 'Rudolph', '2021-11-19', 43, 1, 1, 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `favouritefood`
--
ALTER TABLE `favouritefood`
  ADD PRIMARY KEY (`contactNo`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`contactNo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `favouritefood`
--
ALTER TABLE `favouritefood`
  MODIFY `contactNo` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=764598775;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
