import { Component } from '@angular/core';
import { ViewMode } from '../../../../core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../shared/object-collection/shared/listable-object/listable-object.decorator';
import { AbstractListableElementComponent } from '../../../../shared/object-collection/shared/object-collection-element/abstract-listable-element.component';
import { Item } from '../../../../core/shared/item.model';
import { SubOrgUnitSearchResultGridElementComponent } from '../search-result-grid-elements/sub-org-unit/sub-org-unit-search-result-grid-element.component';

@listableObjectComponent('Administration', ViewMode.GridElement)
@Component({
  selector: 'ds-sub-org-unit-grid-element',
  styleUrls: ['./sub-org-unit-grid-element.component.scss'],
  templateUrl: './sub-org-unit-grid-element.component.html',
  standalone: true,
  imports: [SubOrgUnitSearchResultGridElementComponent],
})
/**
 * The component for displaying a grid element for an item of the type Organisation Unit
 */
export class SubOrgUnitGridElementComponent extends AbstractListableElementComponent<Item> {
}
