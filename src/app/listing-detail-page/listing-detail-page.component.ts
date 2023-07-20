import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';


@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {
  listing : Listing | undefined;

  constructor (
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.listing = fakeListings.find(listing => listing.id === id)
  }
  
  contactSeller(): void {
    if (this.listing?.id) {
      this.router.navigate(['/contact', this.listing.id]);
    }
  }
}
