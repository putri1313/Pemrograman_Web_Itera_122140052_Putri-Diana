from abc import ABC, abstractmethod

# Abstract class sebagai dasar semua item di perpustakaan
class LibraryItem(ABC):
    def __init__(self, title, item_id):
        self._title = title
        self._item_id = item_id

    @abstractmethod
    def show_info(self):
        """Harus diimplementasikan oleh subclass"""
        pass

    @property
    def title(self):
        return self._title

    @title.setter
    def title(self, value):
        if value.strip():
            self._title = value
        else:
            print("Judul tidak boleh kosong.")

# Subclass untuk Buku
class Book(LibraryItem):
    def __init__(self, title, item_id, writer):
        super().__init__(title, item_id)
        self.__writer = writer

    def show_info(self):
        return f"[Buku] Judul: {self.title}, Penulis: {self.__writer}, ID: {self._item_id}"

    @property
    def writer(self):
        return self.__writer

    @writer.setter
    def writer(self, name):
        if name.strip():
            self.__writer = name
        else:
            print("Nama penulis tidak boleh kosong.")

# Subclass untuk Majalah
class Magazine(LibraryItem):
    def __init__(self, title, item_id, edition):
        super().__init__(title, item_id)
        self.__edition = edition

    def show_info(self):
        return f"[Majalah] Judul: {self.title}, Edisi: {self.__edition}, ID: {self._item_id}"

# Kelas utama Library
class Library:
    def __init__(self):
        self.__collection = []

    def add_item(self, item):
        if isinstance(item, LibraryItem):
            self.__collection.append(item)
        else:
            print("Hanya item turunan dari LibraryItem yang bisa ditambahkan.")

    def show_all_items(self):
        if not self.__collection:
            print("Belum ada item dalam perpustakaan.")
        else:
            for item in self.__collection:
                print(item.show_info())

    def search_by_title(self, keyword):
        for item in self.__collection:
            if item.title.lower() == keyword.lower():
                return item.show_info()
        return "Item dengan judul tersebut tidak ditemukan."

    def search_by_id(self, id_code):
        for item in self.__collection:
            if item._item_id == id_code:
                return item.show_info()
        return "Item dengan ID tersebut tidak ditemukan."

# =============================
# Contoh penggunaan program
# =============================

# Membuat instance perpustakaan
my_library = Library()

# Menambahkan buku bertema Teknik Informatika
my_library.add_item(Book("Struktur Data dan Algoritma", "INF01", "Rinaldi Munir"))
my_library.add_item(Book("Pemrograman Python Dasar", "INF02", "Budi Raharjo"))
my_library.add_item(Book("Jaringan Komputer", "INF03", "Andrew S. Tanenbaum"))
my_library.add_item(Book("Kecerdasan Buatan", "INF04", "Efraim Turban"))
my_library.add_item(Book("Machine Learning dengan Python", "INF05", "Aurélien Géron"))

# Menambahkan majalah teknologi
my_library.add_item(Magazine("Teknologi Informasi Terkini", "MG01", 2024))
my_library.add_item(Magazine("AI dan Big Data", "MG02", 2024))
my_library.add_item(Magazine("Tren Keamanan Siber", "MG03", 2024))

# Menampilkan semua item
print("=== Koleksi Perpustakaan ===")
my_library.show_all_items()

# Mencari berdasarkan judul
print("\nCari berdasarkan judul 'Kecerdasan Buatan':")
print(my_library.search_by_title("Kecerdasan Buatan"))

# Mencari berdasarkan ID
print("\nCari berdasarkan ID 'MG02':")
print(my_library.search_by_id("MG02"))
