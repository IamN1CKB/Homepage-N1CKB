def hyper(z):
    y=37.300 +z*0.25
    x=3.20 + y + z*50
    if x>=50:
        x=x-50
        z+=1
    print(x)
hyper(0)