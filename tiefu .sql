-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-03-14 12:59:37
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tiefu`
--

-- --------------------------------------------------------

--
-- 表的结构 `about_us`
--

CREATE TABLE IF NOT EXISTS `about_us` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `about_us`
--

INSERT INTO `about_us` (`id`, `address`, `email`, `phone`) VALUES
(1, '山西学府街省太原市小店区学府街大马村邮政巷121', '123454897@qq.cn21', '12456481646126');

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`id`, `account`, `password`, `hash`) VALUES
(2, 'admin', 'e10adc3949ba59abbe56e057f20f883e', '271f7fcb664f8838c3382c92a86e9ff4');

-- --------------------------------------------------------

--
-- 表的结构 `classify`
--

CREATE TABLE IF NOT EXISTS `classify` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `classic_pot` varchar(255) NOT NULL,
  `zodiac_pot` varchar(255) NOT NULL,
  `gift_iron` varchar(255) NOT NULL,
  `select_gift` varchar(255) NOT NULL,
  `exq_craft` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `designer`
--

CREATE TABLE IF NOT EXISTS `designer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `describe` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `intention`
--

CREATE TABLE IF NOT EXISTS `intention` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `intent` varchar(255) NOT NULL,
  `view` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `charge` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `num` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `iron_pot`
--

CREATE TABLE IF NOT EXISTS `iron_pot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `en_name` varchar(255) NOT NULL,
  `pot_style` longtext NOT NULL,
  `pot_style_img` varchar(255) NOT NULL,
  `pot_appear` longtext NOT NULL,
  `pot_appear_img` varchar(255) NOT NULL,
  `technol_research` longtext NOT NULL,
  `technol_research_img` varchar(255) NOT NULL,
  `is_showimg` varchar(255) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `pot_classify` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `img` varchar(255) NOT NULL,
  `inserttime` datetime(6) NOT NULL,
  `describ` varchar(255) NOT NULL,
  `is_today` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=28 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `img`, `inserttime`, `describ`, `is_today`) VALUES
(1, 'dfdg', '<p>从v范甘迪贵哦豆腐干和喜好驾车v下次就</p>', '', '0000-00-00 00:00:00.000000', '<p>dfkl;kgfgdklhgjklk</p>', 0),
(8, '风格更加好看', '<p>的方法得到发挥</p>', '', '0000-00-00 00:00:00.000000', '', 0),
(20, '', '', '', '0000-00-00 00:00:00.000000', '', 0),
(21, '', '', '', '0000-00-00 00:00:00.000000', '', 0),
(22, '', '', '', '0000-00-00 00:00:00.000000', '', 0),
(23, '', '', '', '0000-00-00 00:00:00.000000', '', 0),
(24, '', '', '', '0000-00-00 00:00:00.000000', '', 0),
(25, '', '', '', '0000-00-00 00:00:00.000000', '', 0),
(26, '', '', '', '0000-00-00 00:00:00.000000', '', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
