import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';


@Component({
  selector: 'app-my-listing-page',
  templateUrl: './my-listing-page.component.html',
  styleUrls: ['./my-listing-page.component.css']
})
export class MyListingPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(
    private listingsService : ListingsService
  ) {}
  ngOnInit(): void {
    // Ensure that the fakeMyListings is correctly imported and used
    this.listingsService.getListingsForUser().subscribe(listings => this.listings = listings)
  }

  onDeleteClicked(listingId: string): void {
    this.listingsService.deleteListings(listingId).subscribe(() => {
      this.listings = this.listings.filter(
        listing => listing.id !== listingId
      )
    })
  }
}
