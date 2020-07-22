# https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/python
def nb_year(p0, percent, aug, p):
    current_population = p0
    years = 0
    while current_population < p:
        current_population = current_population + (current_population * percent)/100 + aug
        years = years + 1
        
    return years
