INSERT INTO book (name, author, description, image)
  VALUES    ('Holy Bible', 'Good', 'Description: ...', 'url'),
            ('Treasure Island', 'Robert Louis Stevenson', 'Description: ...', 'url'),
            ('I, Robot', 'Robert Louis Stevenson', 'Description: ...', 'url'),
            ('The Time Machine', 'H. G. Wells', 'Description: ...', 'url'),
            ('Moby-Dick', 'Herman Melville', 'Description: ...', 'url');

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

INSERT INTO patientOrder (ID, orderDate, idPatient)
  VALUES    (1, '2013-10-19 10:23:54', 'john01'),
            (2, '2013-10-19 10:23:54', 'john01'),
            (3, '2013-10-19 10:23:54', 'john01'),
            (4, '2013-10-19 10:23:54', 'john02'),
            (5, '2013-10-19 10:23:54', 'john02'),
            (6, '2013-10-19 10:23:54', 'john03'),
            (7, '2013-10-19 10:23:54', 'john04');


INSERT INTO bookLoan (ID, referenceNumber)
  VALUES    (2, 'ref0004'),
            (7, 'ref0008');
