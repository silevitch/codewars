import math

# https://www.codewars.com/kata/5ae7e1522c5061beb7000051/python

def kangaroo(kanga1, rate1, kanga2, rate2):
    if rate1 == rate2:
        return False
    elif kanga1 > kanga2 and rate1 > rate2:
        return False
    elif kanga2 > kanga1 and rate2 > rate1:
        return False
    else:
        steps = (kanga2 - kanga1 ) / (rate1 - rate2)
        if steps == math.floor(steps):
            return True
        else:
            return False
