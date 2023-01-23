# Copyright 1999-2022 Gentoo Authors
# Distributed under the terms of the GNU General Public License v2
EAPI=8
DESCRIPTION="This is a program to make SELinux policy violation errors more understandable."
HOMEPAGE="pagure.io/setroubleshoot"
SRC_URI="https://pagure.io/setroubleshoot/archive/${P}/${PN}-${P}.zip"
LICENSE="GPL-2+"
SLOT="0"
KEYWORDS="~amd64"
RDEPEND="sys-process/audit
         sys-apps/dbus
         dev-util/desktop-file-utils
         gui-libs/gtk
         x11-libs/libnotify
         dev-libs/libreport
         sys-apps/policycoreutils
         sys-auth/polkit
         dev-python/pygobject
         dev-python/pydbus
         x11-misc/xdg-utils-utils"
DEPEND="${RDEPEND}"
src_configure() {
    cd framework

    export PYTHON=/usr/bin/python
    ./autogen.sh

}
src_compile() {
    make
}
src_install() {
    make DESTDIR=${D} install
}
