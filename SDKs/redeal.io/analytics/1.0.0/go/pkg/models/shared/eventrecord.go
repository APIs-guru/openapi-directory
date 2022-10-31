package shared

import (
"time")

type EventRecord struct {
    Agent string `json:"agent"`
    Browsertype string `json:"browsertype"`
    Channel string `json:"channel"`
    Click string `json:"click"`
    Clicks int64 `json:"clicks"`
    Code string `json:"code"`
    Company string `json:"company"`
    Contact string `json:"contact"`
    Cost float64 `json:"cost"`
    Costcurrency string `json:"costcurrency"`
    Currency string `json:"currency"`
    Deal string `json:"deal"`
    DealName string `json:"deal name"`
    Delay int64 `json:"delay"`
    Denyreason string `json:"denyreason"`
    Device string `json:"device"`
    Devicetype string `json:"devicetype"`
    Email string `json:"email"`
    Emailaddrsha256 string `json:"emailaddrsha256"`
    Flow string `json:"flow"`
    Flowstep string `json:"flowstep"`
    Flowtype string `json:"flowtype"`
    Impression string `json:"impression"`
    IP string `json:"ip"`
    Latitude string `json:"latitude"`
    Longitude string `json:"longitude"`
    Optin string `json:"optin"`
    Os string `json:"os"`
    Resolution string `json:"resolution"`
    Revenue float64 `json:"revenue"`
    Role string `json:"role"`
    Session string `json:"session"`
    Site string `json:"site"`
    SiteName string `json:"site name"`
    Timestamp time.Time `json:"timestamp"`
    Total float64 `json:"total"`
    User string `json:"user"`
    Userlanguage string `json:"userlanguage"`
    
}

