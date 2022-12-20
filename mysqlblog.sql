-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2022 at 08:34 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mysqlblog`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `cat` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `description`, `cat`, `img`, `user_id`, `date`) VALUES
(2, 'Lorem ipsum dolor sit amet consectetur adipisicing elit', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!', 'Technology', 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 12, '2022-12-20 05:26:12'),
(3, 'the healt title', 'this is description of health this is description of health this is description of health this is description of health this is description of health this is description of health this is description of health this is description of health this is description of health ', 'healt', 'https://images.pexels.com/photos/3413359/pexels-photo-3413359.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 14, '2022-12-20 05:26:12'),
(6, 'This art section ', 'This art section This art section This art section This art section This art section This art section This art section This art section This art section This art section This art section This art section This art section This art section This art section This art section This art section This art section This art section This art section ', 'art', 'https://images.pexels.com/photos/8903961/pexels-photo-8903961.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 14, '2022-12-20 07:27:47'),
(7, 'The Art Section ABC', 'The Art Section ABCThe Art Section ABCThe Art Section ABCThe Art Section ABCThe Art Section ABCThe Art Section ABCThe Art Section ABCThe Art Section ABC', 'healt', 'https://images.pexels.com/photos/14562034/pexels-photo-14562034.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 14, '2022-12-20 07:29:29'),
(8, 'the title', 'this is form abc this is form abc this is form abc this is form abc this is form abc this is form abc this is form abc this is form abc this is form abc this is form abc ', 'art', 'https://images.pexels.com/photos/14300096/pexels-photo-14300096.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', 14, '2022-12-20 07:29:29');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'hamza', 'hamx@gmail.com', '123'),
(2, 'shafi', 'shafi@gmail.com', '$2a$10$28/fLipglS9gBoC5NVP0i.UutNYyAs0gZM5ErtEZpvhk2OgODx1ZO'),
(3, 'a', 'a', '$2a$10$VQPayFPZtGVM9C3wRf1vJuyTD1y1oXEGvzizXkcCyjSp2vzos8JQq'),
(5, 'shapoor', 'shapoor@gmail.com', '$2a$10$bdWVMIl5J0T2jG.i5NxtgOdtNTPkG1JALA6fnvwOB0CNlt85Ae9VS'),
(7, 'shaf1', 'shaf1i@gmail.com', '$2a$10$mcipUpN/aVURz5sZHM7Rxe5hRy8TNyHDgarbdD6/iAXupp3LK4/6q'),
(8, 'shaf3', 'shaf3i@gmail.com', '$2a$10$dC2c8541AcGk/7JBs3q6M.GJSE0sdtsi0lSD23TworLPYbxpJQ0Fm'),
(9, 'asdf', 'asdf', '$2a$10$j0POpqq5rfed3.BBH4T8v.OM2oSRVKkXqVC.E8QZ0dzYOQC90x05.'),
(10, 'asdf1', 'asdf1', '$2a$10$BCsTCSr6IlR/H6nK71st1uZUfoz6oEzYGdl3GNdoylTLUzi2SBkVi'),
(11, 'sardar', 'sardar@gmail.com', '$2a$10$62XLqQDAKYwmPhgEebl2xOQhPHHunZ5bteNnTkzbpHXObkPEaUFRS'),
(12, 'as', 'as', '$2a$10$2GgfUmYJGejJKroLSAnW7O9Qya9PrOSvi7U/sPK2Qf92lDyBrtei.'),
(13, 'asd', 'asd', '$2a$10$CNhEGYbhEKgS8g5u0cQLS.LQrHq/tvE85fIBWwLe9kVepK6i75jxC'),
(14, 'abc', 'abc', '$2a$10$VXZ4gIIxOnGdOhMDhnmnzuq38unQxuy5Y/HkCisHn7lrGH05CMljq');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
