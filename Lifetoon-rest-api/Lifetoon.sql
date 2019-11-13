-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 13, 2019 at 06:28 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Lifetoon`
--

-- --------------------------------------------------------

--
-- Table structure for table `comics`
--

CREATE TABLE `comics` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comics`
--

INSERT INTO `comics` (`id`, `title`, `genre`, `image`, `createdBy`, `createdAt`, `updatedAt`) VALUES
(1, 'Boku No Hero Academia', 'Action', 'https://i.redd.it/ag6ugpvfkjb01.jpg', 4, '2019-11-13 00:00:00', '2019-11-13 00:00:00'),
(2, 'Lookism', 'Drama', 'https://pm1.narvii.com/6051/887dd0bf296185bdcee6d67cc32ef345d3c80518_hq.jpg', 1, '2019-11-10 14:53:03', '2019-11-11 15:29:24'),
(3, 'Dr. Stone', 'Action', 'https://www.otakuusamagazine.com/wp-content/uploads/2018/11/dr-stone-anime2.jpg', 1, '2019-11-11 15:37:35', '2019-11-11 15:38:00'),
(4, 'Spirit Sword Sovereign', 'Adventure', 'https://i0.wp.com/kiryuu.co/wp-content/uploads/2018/09/1535808188_Spirit-Sword-Sovereign.jpg', 4, '2019-11-13 16:16:48', '2019-11-13 16:16:48'),
(5, 'Kimetsu no Yaiba', 'Action', 'https://i3.wp.com/kiryuu.co/wp-content/uploads/2018/08/Kimetsu-no-Yaiba.jpg', 4, '2019-11-13 16:18:38', '2019-11-13 16:18:38');

-- --------------------------------------------------------

--
-- Table structure for table `detail_episodes`
--

CREATE TABLE `detail_episodes` (
  `id` int(11) NOT NULL,
  `page` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `episodes_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `detail_episodes`
--

INSERT INTO `detail_episodes` (`id`, `page`, `image`, `episodes_id`, `createdAt`, `updatedAt`) VALUES
(1, 'page 1', 'https://i0.wp.com/lh3.googleusercontent.com/-5sBG5jO5Vi8/WdFYYIid73I/AAAAAAAA-uQ/o816LKHgy4cS5w3BijJdeiSvt3P2qo6fgCLcBGAs/s1600/003.jpg', 4, '2019-11-13 15:38:04', '2019-11-13 15:38:04'),
(2, 'page 2', 'https://i0.wp.com/lh3.googleusercontent.com/-L7zrGQS42UI/WdFYYB0GCmI/AAAAAAAA-uI/YqeXazUHwXs-Orp2M8zdyE-wcPhlv_PMgCLcBGAs/s1600/004.jpg', 4, '2019-11-13 15:52:40', '2019-11-13 15:52:40'),
(3, 'page 3', 'https://i0.wp.com/lh3.googleusercontent.com/-TF-55Gd4ys8/WdFYZDj186I/AAAAAAAA-uU/jPeG7L8Fa6UhPCXEG5ypPUyKrzyF4QZPwCLcBGAs/s1600/005.jpg', 4, '2019-11-13 16:05:01', '2019-11-13 16:05:01'),
(4, 'page 4', 'https://i0.wp.com/lh3.googleusercontent.com/-i5NOiNlrzrY/WdFYZYN9XxI/AAAAAAAA-uY/g0WDfGar2_YXLqFDQFlS4cIGl8U4xqMswCLcBGAs/s1600/006.jpg', 4, '2019-11-13 16:05:29', '2019-11-13 16:05:29'),
(5, 'page 5', 'https://i0.wp.com/lh3.googleusercontent.com/-F5q-4DvaWG4/WdFYZbKZ-XI/AAAAAAAA-uc/AmkbV_ev0Fw5nI-tV4Nic0lZuthjScP9ACLcBGAs/s1600/007.jpg', 4, '2019-11-13 16:05:53', '2019-11-13 16:05:53'),
(6, 'page 6', 'https://i0.wp.com/lh3.googleusercontent.com/-rdS5EEGn1KU/WdFYaD9T6mI/AAAAAAAA-ug/Ha-QW1GY4SQwY-KEeHKUw5HVW3GYE_u2ACLcBGAs/s1600/008.jpg', 4, '2019-11-13 16:06:24', '2019-11-13 16:06:24'),
(7, 'page 7', 'https://i0.wp.com/lh3.googleusercontent.com/-YY0Z3bTFZUA/WdFYaVSzv3I/AAAAAAAA-uk/kV4yujWuChIpYwZQDXtrlZLsVhr7gcT4gCLcBGAs/s1600/009.jpg', 4, '2019-11-13 16:06:53', '2019-11-13 16:06:53');

-- --------------------------------------------------------

--
-- Table structure for table `episodes`
--

CREATE TABLE `episodes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `comics_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `episodes`
--

INSERT INTO `episodes` (`id`, `title`, `image`, `comics_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Ep. 1', 'https://i.pinimg.com/564x/25/7e/41/257e41a2f9e717f04f89ec71f826dfb5.jpg', 2, '2019-11-13 14:25:40', '2019-11-13 14:25:40'),
(2, 'Ep. 2', 'https://upload.wikimedia.org/wikipedia/id/b/b0/Lookism_Cover.png', 2, '2019-11-13 14:26:32', '2019-11-13 14:26:32'),
(3, 'Ep. 3', 'https://swebtoon-phinf.pstatic.net/20170530_183/1496138222148Nv1Cw_JPEG/thumb_ipad.jpg', 2, '2019-11-13 14:28:07', '2019-11-13 14:28:07'),
(4, 'Chapter 1', 'https://i0.wp.com/lh3.googleusercontent.com/-5sBG5jO5Vi8/WdFYYIid73I/AAAAAAAA-uQ/o816LKHgy4cS5w3BijJdeiSvt3P2qo6fgCLcBGAs/s1600/003.jpg', 3, '2019-11-13 15:03:29', '2019-11-13 15:03:29'),
(5, 'Chapter 2', 'https://i0.wp.com/lh3.googleusercontent.com/-v0T71jqXd-0/WdFY3KoULtI/AAAAAAAA-xA/oblhcbTOtcwXcQHHAyPbJtXJoBjfstFXgCLcBGAs/s1600/002.jpg', 3, '2019-11-13 15:04:12', '2019-11-13 15:04:12'),
(6, 'Chapter 3', 'https://a.wattpad.com/cover/193608756-288-k760271.jpg', 3, '2019-11-13 15:05:35', '2019-11-13 15:05:35');

-- --------------------------------------------------------

--
-- Table structure for table `favorites`
--

CREATE TABLE `favorites` (
  `id` int(11) NOT NULL,
  `isFavorite` tinyint(1) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `comics_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `favorites`
--

INSERT INTO `favorites` (`id`, `isFavorite`, `user_id`, `comics_id`, `createdAt`, `updatedAt`) VALUES
(10, 1, 1, 2, '2019-11-13 06:38:28', '2019-11-13 06:38:28'),
(11, 1, 1, 3, '2019-11-13 09:19:33', '2019-11-13 09:19:33');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20191110104144-create-users.js'),
('20191110122135-create-comics.js'),
('20191110123019-create-detail-comics.js'),
('20191110140615-create-episodes.js'),
('20191110141141-create-detail-episodes.js'),
('20191110141702-create-favorites.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'dipra94@gmail.com', 'admin', 'Dian Prasetyo', '2019-11-10 12:10:06', '2019-11-10 12:10:06'),
(4, 'ilham@gmail.com', 'admin', 'ilham', '2019-11-13 16:12:49', '2019-11-13 16:12:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comics`
--
ALTER TABLE `comics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `createdBy` (`createdBy`);

--
-- Indexes for table `detail_episodes`
--
ALTER TABLE `detail_episodes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `episodes_id` (`episodes_id`);

--
-- Indexes for table `episodes`
--
ALTER TABLE `episodes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comics_id` (`comics_id`);

--
-- Indexes for table `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `comics_id` (`comics_id`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comics`
--
ALTER TABLE `comics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `detail_episodes`
--
ALTER TABLE `detail_episodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `episodes`
--
ALTER TABLE `episodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comics`
--
ALTER TABLE `comics`
  ADD CONSTRAINT `comics_ibfk_1` FOREIGN KEY (`createdBy`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `detail_episodes`
--
ALTER TABLE `detail_episodes`
  ADD CONSTRAINT `detail_episodes_ibfk_1` FOREIGN KEY (`episodes_id`) REFERENCES `episodes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `episodes`
--
ALTER TABLE `episodes`
  ADD CONSTRAINT `episodes_ibfk_1` FOREIGN KEY (`comics_id`) REFERENCES `comics` (`id`);

--
-- Constraints for table `favorites`
--
ALTER TABLE `favorites`
  ADD CONSTRAINT `favorites_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favorites_ibfk_2` FOREIGN KEY (`comics_id`) REFERENCES `comics` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
