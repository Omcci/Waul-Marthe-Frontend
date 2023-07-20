import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css'],
})
export class EditListingPageComponent implements OnInit {
  listing: Listing | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private listingsService : ListingsService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.listingsService.getListingById(id).subscribe(listing => this.listing = listing)
  }

  onSubmit(listingData: Listing): void {
    if (this.listing) {
      // this.listing.name = updatedListing.name;
      // this.listing.description = updatedListing.description;
      // this.listing.price = updatedListing.price;
      this.listingsService.editListing(this.listing?.id, listingData.name, listingData.description, listingData.price).subscribe(() => this.router.navigate(['/my-listings']))
      ;
    }
  }
}
