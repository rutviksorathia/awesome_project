import { StyleSheet, Text, View , TouchableOpacity, Linking, Image} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function onTap(url: string) {
        Linking.openURL(url);
    }

  return (
    <View>
          <Text style={styles.headingText}>ActionCard</Text>
          <View style={styles.container}>
              <Image
                  source={{
                      uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAugMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEAQAAIBAwMCBAMECAUCBwEAAAECAwAEEQUSITFBBhNRYSJxkRQygaEVI0JSsdHh8AczYnLBJIJDU5KTotLxFv/EABoBAAMBAQEBAAAAAAAAAAAAAAIDBAEFAAb/xAArEQACAgEEAAYBAwUAAAAAAAABAgADEQQSITEFEyIyQVEUYYGhQlJxsfH/2gAMAwEAAhEDEQA/AKv5FbMPHSm4s2JHw1IdPbHGK+23rPjs2fUQmIgdK5BC9RTx7B8fdoOayfnC/lRbgYQY/IgIYE8V0BnpXEtpMvIFcxPIvBBJr29R2Y4Uuwyok2w+lculTRy/vAj51OFRsA9T7Vu4fcSRYvYitlqJuPu03Nsj4AGSe1bXTgRyCp+VCzACPpJc9ROJCuARXazKTyeacJo3mDORx61t9EcDcig8+lSvqtk6Vfh5tGc4gERVsc1OEBNSx6LIHyI2INTnT5gw3o4+VYviFXTHEGzwW/tYIIhXQiHp+NFpYPnqw+YqWOxlLYALD5U4aqojIMjfw3VL/TA1tV27lYsPlWvKA69ae2+mzOmWwqe9dPpEZbLt9BSvzage4w+F3sAQMRBtFb2emaeLpcCk5ycelcNDEhwICfTLGvHXVnqEvg13bGJTGeBtPNaMDE42EmmcjSBsJDH/ACoSUXBZhkD5dK38oQx4UR8wR7diNoiGD3zUP2J/3R9aLMb7QpDFuuRUg3gYz+dLOqx1KF0H90uraV2KkYqM6aV5GcfKniLcADr9aIjfB/WxZ9881yTqLAJQtVGZXBZK4wxUH51w+iCT7rg/I1ai8RPAAHuDUM6QO24rEx/2c/wpY1NufqWhNOB1mVGTw86HI5x1HNDyaVGvPlHI/wBNXVbSBukUf0K1v7EgH3ce2aI6jPujEG32CebXVgTnCYHbjFR2qqvwumR3z2r0ltOt3+8lAX+h2+wyRxSM2Pupjn600apcY5meWScmVSGG2J3CFv8A1VPJED0BUfOiZY1gB/6KVT2LjFCPdMDgwL8zkZowzN1PHYP+TcUWBw4xR1tHsHxYwfSl6XWPiZGUf6OaMivMAHHw+r8UNgZuISkDkCMkCDnANSfqj1A+lK5dSIP+WGH+k5oq21C2kx5quh+VIbT04y6zGt1J9hhQgt26oCTW1tAOY1Kj2omGW0K5WVT+Broz+YdsW0/KkGinPpH8zVv1AHqMDa3Cqd2T+dL4rqCd3jjWUMpxymAPxptMCoyTigywAZnk2oOrMeKsqqAXuRXas78Yg8qygcAfMCgLlHT4hktn93inQXKhkYMD0I5qOTjqBn2rWcKYyty3HMSIu74pAdvpity+SXOU3BRwKYSRFs7QfkaDmsJpeAuPlWDUU55MMpbjiLZn25BwR6ccUPuh/f8A/hTP9DPgmQ59siov0Vcdo4Mf7q06yse0QRpnPuaXdfGXhtgM34UnsYnz/Cu08W+GpGx+kohg4JZGH/FeVzoYtjEBg7Oowp7HbW4bZriwvJQUGLdT9wn9nPr71yHsCIW+J0V0Klts9a/T3h1sAavY56cygUVY3OnahJJHYXlvPJHy6xuGKivKn0ySG1kugEZI4y+ArA9M+tQodS0+7hvNOkRLhF3HYTyrYwPcflUmn163vtBj7fDBWuQeZ7O1iT1/CuDaf3iibO9hns4JZJEid41Zkd1BU4+dFSBVRnYgKBkn0FV+aZzhxFJtT+ycfOuPKmRs5Vh6EUzhaK5hSaB1kjddyupyCKReLdbXQbRW8lnklVtjYyqEY5bvjntXvOAGTGKpY4HcJwcYdDj3OcUPNZ2z/wDhKPmKQyeO7ZJ4t+n3CwlCXGAWz2x7dc/hVuuGt7e2e5uHWKFF3M7nAA+dGl6t0Z5q7KzyIjk0iJssqD2IWhG0Yht3PywKtkKwSRLLEySRyAMpHIIqKKa0nlljhdWeFtsqo2dp96MW4njYZVDpoXrGn/ataj0sSHbs2+xBFWu7Nnbxq9wyRoWChnIHJ6CpY4QnKgEV7zfoT3mtKxHos3RWAHpU0WhMzZkyuO6vVm57ACuGVz0bFKJsb5A/aD5plZfSpFbbEWc+56VDqWhXOoW/ktKYVx0Xv86s0kIJzIc1DJ8I+EnFYi2g5DQGsBGCJU9H8NHSXbM5dT0G7gUwktwBgMfrTBkO7JGRWiF/8uqzWHO5+TJ/MKjCxQYMfeJqF4y3AXmnTLGR9z61CyL6Y+QqlCq9CTPvbtoka2f3+lcfZZf9dO2UY6NUWF9D9acLDJjUs82kur5gvFq2CcKp5yTnuKj826VFgIkSFgqvgJzgDPf2ogPYqMKZVA/aSQjB/HNdea0i7ILpCB089cE/9wrilV27cT6ved2d0smj3+ny2/2e+vJYkljKMWiyOuB0X596X+MYtPub22Gm3UMqRRqABGwGceuKAT7aCkEkD7WYZYMWC89e30zRFzBcqMRTq2c7VaM9Poc81zdL4clNu/PzH22hueTB7VQJF8lNoK4cqoG76inR8RawlvJANSlKrHsVPLGMdMdOuKSQXEMu5/NvFbkcI4LDt+z+RNbNxYttSS9xg/EjuFP0IBrqNWrdxAsGeRCD4iTTQLWW5nWRcbEhyAV+o756VBPrzSxl7rzZ1Awqzyc9j0JNTZsZo2HnRSgDJzjcM9fehJtO/VoYJjNt6AMCPw5OOxqRtHSuSwPP6xi3Pn0EZ/xCp9cs7xIoxZ7HVSpk35y3PPHbn+FFyahqGoRGyl1Hzo2OBEHLZHOODxxikzaXciQiMLIxPSNh1B9MiohJdW2GVmUAkBvLK4PP86S2nQZFBAMYtjDHmjOI9stY1S1txCmpmOKIsipvI2YOAPaoLa71OzvDNaXRtpblQzyZx5p45Oc55JoLTZ/tMkq3MsaKqu5UZLsc+nP9mml8PL8u7t9stsiKVKnJwdnT16etJDXo2CY3FDfH8SDUL7UtUjEV9efaY1w6AN06DPAHvXrOmvJLpdnJKdzvAjMfUlRmvG1vWyRDBKR5YTJXHQn+dNbHxRrsNrFCLqVBEojCGFCAAMAZro07tuWkOqrViAk9VYBfvEDoOT69K0VJ6CvKbnxLq94Ilub2A7GWYAQjhgQQffBB+lOZPH+pruUadbNt6OGPxf8AbuqhVaQtViXoo3rUbI3c0jj8a6Y0dn5smJZCBcfAwEXB59xnHfvQ/ibxxYaZbKdPxdyTAhHwQikevfPyrSSvcU67eTHF7c29nGZLuZIVAzlzj/8AaHs9RsL84s7uGY4zhGycdOleNapqtxe3bSXtzM8smeGcHHoB6d+BQVretZXK3VpNKs8TFxjkADrnAz16n5isW0ycuPqe9mLOfaorhEhiaSVgiIMszHAAqg2n+J901wglsoJIAq5JYq+ccnqRjr2onxB45W+jRNJu2gtXjYT7oWL79pO0EDoOM/jTPNh1otjYEdW/iHQ727FnbajBJcMSoiB+IkdRj8KML2IPM9t/7i/zrzO3tLK7jlEbyEvjErA88jPUYH1rP0Ina4/NTWNrEXiUjw526xJXWFuWkzg8ArmsEAdgcJknOXbrn2qSGFZCCo5PoP8Amq7qmu3VvcyW1vEEZH++AD6cYOfWlc/EYzqvLSy/ZXY4UIFHQRj+VSRW8xAOHj2ggBmKnH8RSrwzqkuqRzi5KeajjkDGB6CmxRN4BUkgDj39aQxIOJZVhlDAzZExdSLy82gDI3kAY9PbtQ+oG9IU2F5eFixDs0nbPQcfh0qaTEY2SSxxFzxljn6A5rTPIIJnto5BgcysoAIHfHcfStDNNYDEGEeoq8LzXEw+IY3xq+71GSO9HXBt4ci7Sz5w237KoHuMhuPn7UnW/mZ8G4gjPYmIthfX0/LNdxahL5wJuYJJFJASRWA+nQ1pqZotbVX7jhDbyrmKy2YOT5NwyMPfrx/GiLeKAwqS92jZw0TEvkeu7NB6ff3flgTxxKQdpDLtO3HGOc/wpu3nurZYwqW+8WCjHtkc/XNRWVkcMOJUlgxxBLxIFRiSBMUP6xggbHbt8PT1pPbRLHbJbHUPJVAoVJNxBAAGMgjj2x701hjtcSRyvPNKrkkDJHtgjOfoKGlsIZchIJ3J5BO47PpVGnQAYHURdYYNHZyNDvWe2cRscCO4K5GOvJ6e1cRKyhp57TVBxndCxbH0J4rt9Pfy2ZBIh6EIpb27jArQhNoWkR+SdpyuWJqsHEn3kwINatOF3TxMSPhbOcZ9Dg0aAYYvOe3k35C4APIxn73b0xRbNd3keyWdZl7gHhB0OSQCBxmuv0es8YnmWBIYxw+cE847YwPxzXirN7TN3qvYE2jwJoEdxO6pcNFIwQcfd3nkdTjgGld9qFhcWwt5xLJJywdWZvLPQ4z/AE60SzwXGht9hlzLaSiaPaxJZOd4Hfplv50g8Sg3CxSwqEYja3HXnO4Y6ikCsoOe8wL7dy+jqRObMwNHFbp8Y/V7mO5Qc8Z7dRQsUs8cUlrHPLbW+349uMuR2yM/2aBF5Kxbz03GMgeYi9T9elSabbXF1JFFYxN+tLKgBJJOcfT60wZxzOfljDra2hmCMbG5uYtgJSJv1rZHBwudvPbHarXb6bf6foMCC1LKwcusuQ0bHIG7Cnt+HHar7oGlaboKRWdtaPLOQTJM6HJx7n7oyOAKPu7+Pyd0tvKoAPBU9uuOOa8uH4JlKq1fOJ5ojhEczWqIC5YbZmZe3fH5VyL+0x9yP86sfiTTbJ7ea9s7cQXC/E3lbgJP9w9e/HvVHw55MYJPt/Sl3VAGWU6jI54h9pO9xKtvFGQynBwwPYnPr2x2pN4y08pd206qkrujbzgjgEY6H3NT6egtJWkhAVX4YLxkYI+uTn8KXeLZoZ72HbM4bySrLn7vYH8/ypvpB4iGYlPUJNb2+o6eJ1tWtogPiA6Fx9fesOu61CWiVYZMgEsFzjjOPUelLWt40lbbeklST077duKELKjgC5bKhWz34X+te4zM3YGB/uWjTNW1qZglvaabGzNjzmjHB7kkkfWupZddu2bfqELkkqcovy9eB/xVb0+DzWiRb7yyGAwWwDgYz+Oa7WylK83YGMLz7HrWmErcdZ/ePLMawt0sZmgKbthCRrkn0H5U4bVJ7Zlj3x5i4kaRCA3GfbJ47YqpWdvKt2ifpFk5xwe2f+O1GGWeN5V+0SMVY5XaMHgnPIrS00EfUaW+r6msfmutjcQEEukcL43dupP19qZG5ZWd57GK3RM/FHuX4h6du+KSxX832Rmi1KW1BcfqxGq7unPGOlcXTX3kTbtXkmXo8e9iJByORnFLZFPcIWFRgRvb6/PLGZoEkCscHL525544P9ij08QXUKbhDHk4/wAw9ent71S7We6OnBYb0xR5A8jsTjOff+tQ3X25ojuuN4yCM/h/T6UJyvRhK4I5E9D0rW/Ou45ri1heFV3fCSM4B4bNdaz4ijvncGy5VmQfCvOO3wgnuD0ql+EJLi21EPHLHFGFkYq8fH3D3zxVgSawurpEu4LS4uQ7+aQdhZsn8+lAbmXs5hLUjn6izXbhjbxJYzvAm4vLndnC87cYGKX6vrEchiNnbggplmlGUUjrtTOCfc+nSrPJp+jM8IubS8t1cHd+sLBhg/PNRt4b0S5kSO01FAqwklZI1bPJyPagTWAcExr6UHMoUF/dSf8AUibz8HlWXaR8iB8qssUNt4liPwqpjgLjaG3Ivofix69sVO3hu3tmDQSQPHG6iQLGefwHUdKIt9PvIS8tgVwYtpcEg7OPh+LgD2ph1CsIg6Rh7cRZD4NDy2scdy+2XJz5Q4GTnJz3welR+DlgtrqxnaS8eeQgxQQquzOG4JJyOCe45pzDcatBsyLiZlykcw2kRhjjGAvTqeooTR9KgivrRk+0i5i3bQMbSdp5weenHX+NY78ekwDpHHO3+ZZ5tZnjQJNZ6uJdqk+XKnTPru47+9Cap4kiitYFlg8Qx4kJ4aI9unU9+eeaE1a4m8jSUaPZHPFiTM+wRhcDIwOTzn50ai2d1ZM95qCxQpeTqpDcgZ3KF9trD8MUiuy7jIEeUpbI5i5fFUEq+TI2vbDwd4iAX547VF+lvCy8fa7044yCcfxqS3n002Qhe4jlZ7gxebnLCIsRlh8jnFLm8JeGyxI1gjnoI1/+9UrazD1RD0lfYYIk+z8KRX9tNLctKTuLHg+go8y1iynivbsRJXdxM0a1EcUjTgEs3QijGt7Y5zEv0oYTHJHrXYlI60sk9xy4AxMezgyrCMDHp3qKW1iCMQvb1qXzct7UPPMeAnfrRAn5njgdSGKNUkEmDkUY1wHKhl6d+9Qo+91BWp2A35wPStL4gKhPU5tLWNgpO7ptwT0phHax/eLEEnaQTwRQyvtAGRUguAUXkc9ama05lS1gCSRwQhCdoxuxxW1NsoPmJkAdKFkkEcZIbgAk1ADvUktwadW+e4mwYPEd6PJpq6lH9rUiB8o2D0yCKk1+002wuSto/nszFsg5AB5pBhPLyxOc9K3FINrseacMRRY/cPTUZ9Nj8+3umzEjMkLHcrH0wfnUsPiu2uXjbUdPiYtDsZ04KncRkfSkeor9sMJT4PLbJPqOM/wrjUbISfrYAVUrt9j/AHzSGpRjHDUso5lkj1e3R/MtbqXAZSkR5JyMnrkcCjm1Od1eXZ5qFMkj4SBnoQOPyrz+yhukdMNtjjYEkUfPfyWUm5WdQ6YxnPFKbTgDiNXVKe+JddOv9PgtYpkgbHnoxUEOGwvAI69MevWnei32nXepxLEmCjZGDjAC/u15lp2trDNH5Gz4ZVb4uxwR09MY+gp/pOpJqOpRokXlytg+YjlSDs9vcGkWI45zH1srDEvN1LbnVpkZBtVQoOc8YDevr/CkvidkkWxtV+CKS++Jgp3bmwMgZ9u9JL+9v11aZFu5W8vblZNrA4Ueq0m1O6vHu7IlYz/1C7QI0GTn2P8AKjrLnHqg2bAD6ZaY9BBDrHJ8KzlQqqHHBIyckH0POetMk8PajsXbaOwxwwVcH86RQa5Mn2x7uK2ZkTKyxPtlU7u/ritDxPMAAuo34A6AEcfnWG1h2MxgPHplU3is3gVFIVGPdc12sYZN4PRh/KqmYAZnOVSzYjPSdLuNRuI0jBwSOgrNXs5NO1GezkJzE2OfSrBpWpx6RbrcJt3RhV/Okvi27bVvFLuhx5zKg+Zx/Oudp9Rc+oOR6Z09VpkqpG2LkrDjNXCH/D2/EvxyjbuAz7URr3gNbDR7u7t5WkliTeiAfeNdPcZzvKPyZRXnC9uahe46Yq6//wADdyQIf2mGTx61XvEOhNolxHb3Jy7puHHTkilFz8iH5Tf0mKRcHPHWu4i74HtTnVrKyk1yK10oAiQRoAPU4yaI17wxe6Haicjduk8sAdeelKB8xdyCHsKHDGI4iTHIHI+JQPzqS4C7iidj/f8ACrCfBOprCrEYGzPf0zS3RvD9/qts91DG2BIU546dfzohXZ8CCxWK/LZiVXrkAfjVzPgDUFBVSvTrzzSC40e9sdY062mjINxMpHyBFe2yXABPIqumtj3EOyg8TyO68Fahbahp9sVJF3LsLdlAGSfpT++/w8dYmW1ujz0Bq7vOjMrNtLKfhJ7HGM1w10D35qhacRRfMrjeBtOi1BpfMJtiP8r8Mfx5qgeOPCdzbancS2ULtZqY0jJ53Ej+detS3AJ6159/ifqWp20lo1mzC1aI7yOQrg8E1j1ADMFmyJ5s9lcBWdIG2IpZmxwBRXhi4nttQa4UnZBE7tk4AwpxUs2u3Js7iwhbZayRhOP2gAP+RUdnNbxqJIoWf4WWTafiwVwcj51O3tMyrhxgywahfzJqMRWF3kuIo3YKvCEnbz9P4ULqtyWi0+9iyHWeVmU9PgYAf38qXXmp79y2l7JHuQI279peOPqKiubtYrKC3inUhVbJz1ycmkhRgcStmOTzGNprQkVfNRGLSE8qDxnnP1H0o/8ASGh99EJP+4VXIHs7hoLeR0i3NhpScBc96tMfg9HjVzr1tlgCcOv86JdOX5E95+O5E/hHUgcFD09K0nhbVSpVYTndXrbahED1X6VH+k4h3WqfxWbuD5tS8zy0+G9ZfdG0RKGm3hHwhNc34vdTDKkEoKgnqRV3l1mNejLS2415VyFYD5U6nwxiYi/xSpR3LVNfKCfShZL9SpUnIPrVOk1st05qH9Lt3rpL4cQJyX8XUmXcX4PfNJ/EGk2muSQyTg+YjLz6gHOKTRaru74otNRPHxGhfRY4MfTrQ/IMmtvD2nW2rfbVU5VU8sehUk/808upobpAk6K4DBhkZ5FIvtzgZyCaw6lg84pS6YLwBKmt3ckx+b9eR7YxQ1vNDaQ+VboqJkthR3NJ/wBIIfQ/jXDXsX9mmCj9Io2frGN28E1zBcSIDJASUJ7VzJqPvSaW7A6GhXugaaKBFG6OzqfvXP6SB7mq+90O/FQSXafvUY0+Ys6nb8yzHUMnvUdzJb3lu9vdKHikGGBqs/bf9VSJff6hWnTcYg/mr9xXrHgnPxaVMpQn/LY8iptA8EPbi8mvJFeTyiIkU9fWmI1DH7QqeLUyOQ4Bqc+HpDXWLmVC6t0EzJjYqnhZEB49KX3dlCSm1IT8PJAI5q+6jBb6ntckRy9yB96q/ZaQ96C8zrFEsjIcfeO04yKgOhtRgvcsOqrZcxXoWiQX+qxQyRo0C5eXaSDtH9cVf007TERUWxttqjAzGKCsYLXTI3S1X4m+856mpvtQrp6fSbF9Xcjs1GTxO5rqbP3qFlu5sferKyqalE517t9wR7iVurmuNxPesrKvUATmscnmb3GtZNarKODCIDzRoJFZWVLbOnpOpL5rY61w8rDp3rKypgOZ0WPED85955rGdvWsrKaJOTBXlfP3q6ViVzmtVlGeogH1QZnYnk1xmsrKasibuZWVuso5k0xqPewPBrKygMISdJ5Bghu9dJPIF4OMnPFZWUGIW4zl7iT96o/Pk/erKyvYm7j9z//Z'
                  }}
                  style= {styles.imageCard}
              />
              <View style={styles.fullContainer}>
                  <View style={styles.buttonContainer}>
                  <View style={styles.buttonDesign}>
                        <TouchableOpacity onPress={() => onTap('https://reactnative.dev/')}>
                          <Text>Press hear</Text> 
                        
                     
                  </TouchableOpacity>
                  </View>
                  <View>
                      <Text>View More...</Text> 
                      </View>
                  </View>
                  </View>
                  
                  
              
                  
              

                  
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 12,
    },
    container: {
        height: 300,
        backgroundColor: '#FEEECD',
        margin: 18,
        borderRadius: 8,
        
    },
    
    imageCard: {
        height: 200,
        borderTopEndRadius: 8,
        borderTopLeftRadius: 8,
    },
    fullContainer: {
        alignItems: 'center',
        
    },
    buttonContainer: {
        flexDirection: 'row',
        width: 200,
        margin: 12,
        
        justifyContent: 'space-between',
    },
    buttonDesign: {
        paddingHorizontal: 12,
        backgroundColor: 'white',
        paddingVertical: 8,
        borderRadius: 8,
        
    }

})