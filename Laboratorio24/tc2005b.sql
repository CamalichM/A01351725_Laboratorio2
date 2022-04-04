-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-04-2022 a las 23:03:44
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tc2005b`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `caballos`
--

CREATE TABLE `caballos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion` varchar(400) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `imagen` varchar(400) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `caballos`
--

INSERT INTO `caballos` (`id`, `nombre`, `descripcion`, `imagen`, `created_at`) VALUES
(1, 'Siprit', NULL, NULL, '2022-03-10 16:29:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `capybaras`
--

CREATE TABLE `capybaras` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion` varchar(400) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `imagen` varchar(400) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `capybaras`
--

INSERT INTO `capybaras` (`id`, `nombre`, `descripcion`, `imagen`, `created_at`) VALUES
(1, 'Anton', 'Es serio', 'https://s2.coinmarketcap.com/static/img/coins/200x200/16636.png', '2022-03-14 05:49:56'),
(2, 'Adalberto', 'Es simpático', 'https://pbs.twimg.com/media/Enmf1ZwXcAEsX53.jpg', '2022-03-14 04:58:49'),
(3, 'Adrián', 'Es gracioso', 'https://i1.wp.com/peccaryleather.com/wp-content/uploads/2020/01/especie-carpincho.jpg?fit=800%2C600&ssl=1', '2022-03-13 22:41:27'),
(4, 'Marco', 'Es chido', 'https://www.zoobrno.cz/wh/960-720/img/catalog/img/hydrochaeris-hydrochaeris.jpg', '2022-03-13 22:39:12'),
(5, 'Peter', 'Es genial', 'https://dictionary.cambridge.org/es/images/thumb/capyba_noun_004_0649.jpg?version=5.0.225', '2022-03-14 04:16:50'),
(6, 'Aldo', 'Es atractivo', 'https://www.fao.org/3/V4590S/V4590S03.jpg', '2022-03-14 04:20:08'),
(7, 'Anastacio', 'Le gusta la piña', 'https://i.etsystatic.com/6874055/r/il/9a0232/3296820036/il_fullxfull.3296820036_pjnm.jpg', '2022-03-14 04:18:43'),
(8, 'Elías', 'Le gusta bailar', 'https://img.freepik.com/foto-gratis/rata-gigante-capybara-es-lindo-animal-jardin_65103-1761.jpg', '2022-04-03 21:02:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `username` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(400) COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`username`, `password`, `nombre`, `created_at`) VALUES
('CapyMarco', '$2a$12$dJ98J8suJzLV2QKrHljBNOi2rZXG4uvVFUZUMmagrjZbFk6vdwp4u', 'Marco Antonio Camalich Pérez', '2022-03-16 02:06:14'),
('MACP', '$2a$12$TFEBiI1.bJlRxGoE9Y6/OeGoI6i8WXcUfmtAsZMZRtb2SrxF.f9HW', 'Marco Camalich', '2022-03-29 03:36:29');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `caballos`
--
ALTER TABLE `caballos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `capybaras`
--
ALTER TABLE `capybaras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `caballos`
--
ALTER TABLE `caballos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `capybaras`
--
ALTER TABLE `capybaras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
