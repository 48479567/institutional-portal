import { Component, OnInit, OnDestroy } from '@angular/core';
import { SectionModel, LinkModel } from '../../../../shared/models';
import { Subscription } from 'rxjs';
import { LinksGroupHttpService } from '../../../../core/http/group/links/links.http.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksGroupComponent implements OnInit, OnDestroy {
  public dataSource: any[];
  public srcSelected: string;
  public documentSubscription: Subscription;
  public titleDocumentsGroup = '';
  public sectionData: SectionModel = {
    title: 'Enlaces',
    background: 'https://i.imgur.com/hombPA3.jpg'
  };
  public displayedColumns: string[] = [ 'name', 'size' ];

  constructor(
    private dgHttpService: LinksGroupHttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.getDocuments();
  }

  // private getDocuments(): void {
  //   this.documentSubscription = this.route.paramMap.subscribe(
  //     (params: ParamMap) => {
  //       this.dgHttpService.getLinks(params.get('id')).subscribe(
  //         (links: LinkModel[]) => {
  //           this.dataSource = links;
  //           this.srcSelected = links[0].path;
  //           this.titleDocumentsGroup = params.get('id');
  //         }
  //       );
  //     });
  // }

  ngOnDestroy(): void {
    this.documentSubscription.unsubscribe();
  }
}
