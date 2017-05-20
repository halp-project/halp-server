\c halp;

INSERT INTO book (title, author, description, image)
  VALUES    ('Holy Bible', 'Good', 'Description: ...', 'url'),
            ('Treasure Island', 'Robert Louis Stevenson', 'Description: ...', 'url'),
            ('I, Robot', 'Robert Louis Stevenson', 'Description: ...', 'url'),
            ('The Time Machine', 'H. G. Wells', 'Description: ...', 'url'),
            ('Moby-Dick', 'Herman Melville', 'Description: ...', 'url');

INSERT INTO item (name, description, image, price)
    VALUES  ('El Mundo', 'El ...', 'https://...', 2),
            ('Tabaco', 'El ...', 'https://...', 4),
            ('Marca', 'El ...', 'https://...', 1),
            ('Chupachus', 'El ...', 'https://...', 6);


INSERT INTO itemCopy (referenceNumber, idItem)
    VALUES  ('ItemRef01', 1),
            ('ItemRef02', 1),
            ('ItemRef03', 2),
            ('ItemRef04', 2),
            ('ItemRef05', 3),
            ('ItemRef06', 3),
            ('ItemRef07', 4),
            ('ItemRef08', 4);

INSERT INTO bookCopy (referenceNumber, idBook, reserved)
  VALUES    ('ref0001', 1, FALSE),
            ('ref0002', 1, FALSE),
            ('ref0003', 1, FALSE),
            ('ref0004', 1, TRUE),
            ('ref0005', 2, FALSE),
            ('ref0006', 2, FALSE),
            ('ref0007', 2, FALSE),
            ('ref0008', 2, TRUE),
            ('ref0009', 3, FALSE),
            ('ref0010', 3, FALSE),
            ('ref0011', 4, FALSE),
            ('ref0012', 4, FALSE),
            ('ref0013', 5, FALSE);

INSERT INTO patient (username, password, name, lastname, description, birthdate, room)
  VALUES    ('john01', 'passwd01', 'John', 'Smith', 'Description: ...', '1975-04-13', 'A1001'),
            ('john02', 'passwd02', 'John', 'Smith', 'Description: ...', '1975-04-13', 'A1001'),
            ('john03', 'passwd03', 'John', 'Smith', 'Description: ...', '1975-04-13', 'A1001'),
            ('john04', 'passwd04', 'John', 'Smith', 'Description: ...', '1975-04-13', 'A1001'),
            ('john05', 'passwd05', 'John', 'Smith', 'Description: ...', '1975-04-13', 'A1001'),
            ('john06', 'passwd06', 'John', 'Smith', 'Description: ...', '1975-04-13', 'A1001'),
            ('john07', 'passwd07', 'John', 'Smith', 'Description: ...', '1975-04-13', 'A1001');

INSERT INTO employee (username, password, role)
  VALUES    ('userBooks01', 'books1', 'book'),
            ('userBooks02', 'books2', 'book'),
            ('userKiosk01', 'kiosk1', 'kiosk'),
            ('userfood01', 'food1', 'food'),
            ('userAssistant01', 'assis1', 'assistant'),
            ('userAdmin01', 'admin1', 'admin');

INSERT INTO patientOrder (ID, orderDate, idPatient, completed)
  VALUES    (1, '2013-10-19 10:23:54', 'john01', TRUE),
            (2, '2013-10-19 10:23:54', 'john01', FALSE),
            (3, '2013-10-19 10:23:54', 'john01', TRUE),
            (4, '2013-10-19 10:23:54', 'john02', FALSE),
            (5, '2013-10-19 10:23:54', 'john02', TRUE),
            (6, '2013-10-19 10:23:54', 'john03', FALSE),
            (7, '2013-10-19 10:23:54', 'john04', TRUE);


INSERT INTO bookLoan (ID, referenceNumber)
  VALUES    (2, 'ref0004'),
            (7, 'ref0008');

INSERT INTO purchase (ID, referenceNumber)
  VALUES    (1, 'ItemRef01'),
            (3, 'ItemRef03'),
            (4, 'ItemRef05'),
            (5, 'ItemRef07');
