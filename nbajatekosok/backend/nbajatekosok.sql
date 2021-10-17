-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2021. Okt 17. 22:22
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
(1, 'Tyler_Herro', 'SG', 'Miami_Heat', 14, 21),
(2, 'Ja_Morant', 'PG', 'Memphis_Grizzlies ', 12, 22),
(3, 'DeAaron_Fox', 'PG', 'Sacramento_Kings', 5, 23),
(4, 'Nikola_Vucevic', 'C', 'Chicago_Bulls', 9, 30),
(5, 'Bam_Adebayo', 'C', 'Miami_Heat', 13, 24),
(6, 'LeBron_James', 'SF', 'Los_Angeles_Lakers', 23, 36),
(7, 'Aaron_Holiday', 'PG', 'Washington_Wizzards', 3, 25),
(8, 'Giannis_Antetokounmpo', 'PF', 'Milwaukee_Bucks', 34, 26),
(9, 'James_Harden', 'SG', 'Brooklyn_Nets', 13, 32),
(14, 'Gorgui_Dieng', 'C', 'San_Antonio_Spurs', 10, 31);

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
  MODIFY `jatekos_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
