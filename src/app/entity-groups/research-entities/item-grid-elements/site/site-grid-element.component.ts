import { Component } from '@angular/core';
import { ViewMode } from '../../../../core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../shared/object-collection/shared/listable-object/listable-object.decorator';
import { AbstractListableElementComponent } from '../../../../shared/object-collection/shared/object-collection-element/abstract-listable-element.component';
import { Item } from '../../../../core/shared/item.model';
import { SiteSearchResultGridElementComponent } from '../search-result-grid-elements/site/site-search-result-grid-element.component';

@listableObjectComponent('Site', ViewMode.GridElement)
@Component({
  selector: 'ds-site-grid-element',
  styleUrls: ['./site-grid-element.component.scss'],
  templateUrl: './site-grid-element.component.html',
  standalone: true,
  imports: [SiteSearchResultGridElementComponent],
})
/**
 * The component for displaying a grid element for an item of the type Organisation Unit
 */
export class SiteGridElementComponent extends AbstractListableElementComponent<Item> {
}
