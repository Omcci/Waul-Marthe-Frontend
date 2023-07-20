import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from "../listings.service"
import { Listing } from '../types';


@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {
  isLoading: boolean = true;
  listing : Listing | undefined;

  constructor (
    private route: ActivatedRoute, 
    private router: Router,
    private listingsService: ListingsService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
   if (id) { this.listingsService.getListingById(id).subscribe(listing => {
      this.listing = listing
      this.isLoading = false
    })
    this.listingsService.addViewToListing(id).subscribe(() => console.log("Views updated"))
  }}
  
  contactSeller(): void {
    if (this.listing?.id) {
      this.router.navigate(['/contact', this.listing.id]);
    }
  }
}
