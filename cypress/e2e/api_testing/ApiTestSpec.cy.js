/// <reference types="cypress"/>


//const API_BASE_URL = cypress.env('apiBaseUrl');
let CREATED_ID

describe('API with Cypress', () => {

    describe('Get all BookingIds', () => {


        const getResponse = () =>
            cy.request({
            method: "GET",
            //url: `${API_BASE_URL}/booking`
            url : "https://restful-booker.herokuapp.com/booking"
            })

        it('verify response has headers', () => {
            getResponse()
            .then(response => {
            console.log(response)
            expect(response).to.have.property('headers')
            console.log(response.headers)
            })
        })

        it('verify response status', () => {
            getResponse()
            .its('status')
            .should('be.eq', 200)
        })

        it('verify response is array', () => {
              getResponse()
              .its('body')
              .should('be.an', 'array')

        })

        it('get all booking', () => {
            getResponse()
            .then(response => {
                console.log(response.status)
                console.log(response.body)
            })
        })

        it('verify response contains object with key bookingid', () => {
              getResponse()
              .its('body')
              .then(response => {
                    expect(response[1]).to.have.keys("bookingid")
              })
        })
    })

    describe('Create booking', () => {

        const getResponse = () =>
            cy.request({
                method: "POST",
                //url: `${API_BASE_URL}/booking`,
                url : "https://restful-booker.herokuapp.com/booking",
                headers: {
                    "Content-Type": "application/json"
                },
                body:
                {
                    "firstname": "Sally",
                    "lastname": "Brown",
                    "totalprice": 111,
                    "depositpaid": true,
                    "bookingdates": {
                        "checkin": "2013-02-23",
                        "checkout": "2014-10-23"
                    },
                    "additionalneeds": "Breakfast"
                }
            })

        it('verify response has headers', () => {
                 getResponse()
                     .then(response => {
                     console.log(response)
                     expect(response).to.have.property('headers')
                 })
        })

        it('print response', () => {
                getResponse()
                  .then(response => {
                    console.log(response.body)
                    console.log("CREATED_ID = ", CREATED_ID)
                })
        })

        it('verify the status of the booking creation', () => {
            getResponse()
                .then(({status}) => {
                expect(status).to.be.eq(200)
                cy.log(status)

            })
        })

        it('verify the lastname in the created booking', () => {
             getResponse()
                .then(response => {
                expect(response.body.booking.lastname).to.be.equal('Brown')
                })
        })

        it('verify the totalprice', () => {
            getResponse()
                .then(response => {
                expect(response.body.booking).to.have.property('totalprice', 111)
                console.log(response.body.booking.totalprice)
                })
        })
    })


})

