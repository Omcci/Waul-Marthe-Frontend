import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fakeMyListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css'],
})
export class EditListingPageComponent implements OnInit {
  listing: Listing | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeMyListings.find((listing) => listing.id === id);
  }

  onSubmit(updatedListing: Listing): void {
    if (this.listing) {
      // this.listing.name = updatedListing.name;
      // this.listing.description = updatedListing.description;
      // this.listing.price = updatedListing.price;
      alert('Saving changes to the listing ...');
      this.router.navigate(['/my-listings']);
    }
  }
}
