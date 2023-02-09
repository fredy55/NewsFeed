#======== Docker file for Laravel 8.0 =======#

#Get the php 8.0 official image
FROM php:8.0-fpm

#Create details of the app
LABEL 'Developer'='Alfred'
LABEL version='1.0.1'
LABEL description='Laravel api app for new aggregator'

#Docker working directory
WORKDIR /backend

#install the required php prerequisite packages
RUN apt-get update && \
    apt-get install -y \
    libzip-dev \
    unzip \
    libicu-dev \
    libxml2-dev \
    libpq-dev \
    libmemcached-dev \
    zlib1g-dev \
    git \
    libssl-dev \
    curl


#Get composer in the container location
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

#Set composer super user
ENV COMPOSER_ALLOW_SUPERUSER=1

#configure php to avoid pkg-config

#Install and configure php extentions
RUN docker-php-ext-install pdo_pgsql opcache soap zip exif intl bcmath
RUN composer require facade/ignition --ignore-platform-reqs

#Copy the json & lock files
COPY composer.json composer.lock ./

#Install php dependencies
RUN composer Install --no-dev --no-scripts --no-autoloader --ignore-platform-reqs

#Copy the enviromental variables
COPY .env ./

#copy all other files
COPY . .

#Run other composer configs
RUN composer dump-autoload --ignore-platform-reqs

#Expose a port for the app in the container
EXPOSE 9000

CMD ["php-fpm"]






