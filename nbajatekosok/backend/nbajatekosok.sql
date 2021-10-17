-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2021. Okt 17. 22:33
-- Kiszolgáló verziója: 10.4.6-MariaDB
-- PHP verzió: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `nbajatekosok`
--
CREATE DATABASE IF NOT EXISTS `nbajatekosok` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `nbajatekosok`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jatekosok`
--

CREATE TABLE `jatekosok` (
  `jatekos_id` int(11) NOT NULL,
  `jatekos_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `jatekos_poz` varchar(3) COLLATE utf8_hungarian_ci NOT NULL,
  `jatekos_csapat` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `jatekos_mezszam` int(11) NOT NULL,
  `jatekos_kor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `jatekosok`
--

INSERT INTO `jatekosok` (`jatekos_id`, `jatekos_nev`, `jatekos_poz`, `jatekos_csapat`, `jatekos_mezszam`, `jatekos_kor`) VALUES
(1, 'Tyler Herro', 'SG', 'Miami Heat', 14, 21),
(2, 'Ja Morant', 'PG', 'Memphis Grizzlies ', 12, 22),
(3, 'DeAaronFox', 'PG', 'Sacramento Kings', 5, 23),
(4, 'Nikola Vucevic', 'C', 'Chicago Bulls', 9, 30),
(5, 'Bam Adebayo', 'C', 'Miami Heat', 13, 24),
(6, 'LeBron James', 'SF', 'Los Angeles Lakers', 23, 36),
(7, 'Aaron Holiday', 'PG', 'Washington Wizzards', 3, 25),
(8, 'Giannis Antetokounmpo', 'PF', 'Milwaukee Bucks', 34, 26),
(9, 'James Harden', 'SG', 'Brooklyn Nets', 13, 32),
(14, 'Gorgui Dieng', 'C', 'San Antonio Spurs', 10, 31);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `jatekosok`
--
ALTER TABLE `jatekosok`
  ADD PRIMARY KEY (`jatekos_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `jatekosok`
--
ALTER TABLE `jatekosok`
  MODIFY `jatekos_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
