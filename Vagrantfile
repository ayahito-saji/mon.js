# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
config.vm.box = "bento/ubuntu-16.04"
config.vm.network "forwarded_port", guest: 8080, host: 8080
config.vm.network "private_network", ip: "192.168.33.10"
config.vm.provision "shell", privileged: false, path: "provision.sh"
end
