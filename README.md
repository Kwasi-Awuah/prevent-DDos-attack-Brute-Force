# prevent-DDos-attack-Brute-Force
```
prevent a DDoS attack (or a Brute-force attack) using rate limiting
```

#Introduction
This sheet is focused on providing an overall, common overview with an informative, 
straight to the point guidance to propose angles on how to battle denial of service (DoS) attacks on different layers. 
It is by no means complete, however, it should serve as an indicator to inform the reader and to introduce a workable methodology to tackle this issue.

#Rate limiting


:ok_hand:Rate limiting is the process of controlling traffic rate from and to a server or component. It can be implemented on infrastructure as well as on an application level. Rate limiting can be based on (offending) IPs, on IP block lists, on geolocation, etc.

:fist_oncoming: Define a minimum ingress data rate limit, and drop all connections below that rate. Note that if the rate limit is set too low, this could impact clients. Inspect the logs to establish a baseline of genuine traffic rate.
                  (Protection against slow HTTP attacks)
                  
                  
:fist_oncoming: Define an absolute connection timeout


:fist_oncoming: Define a maximum ingress data rate limit, and drop all connections above that rate.


:fist_oncoming: Define a total bandwidth size limit to prevent bandwidth exhaustion


:fist_oncoming: Define a load limit, which specifies the number of users allowed to access any given resource at any given time.

:construction: 

# Install dependencies

``` npm i ```
                  
# Run App
 
``` npm run dev ```
