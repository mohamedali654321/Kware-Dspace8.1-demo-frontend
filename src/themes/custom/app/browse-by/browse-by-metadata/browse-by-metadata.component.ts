import {
  AsyncPipe,
  NgClass,
  NgIf,
} from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { BrowseByMetadataComponent as BaseComponent } from '../../../../../app/browse-by/browse-by-metadata/browse-by-metadata.component';
import { ThemedBrowseByComponent } from '../../../../../app/shared/browse-by/themed-browse-by.component';
import { ThemedLoadingComponent } from '../../../../../app/shared/loading/themed-loading.component';
import { ThemedConfigurationSearchPageComponent } from 'src/app/search-page/themed-configuration-search-page.component';
import { KwareTranslatePipe } from 'src/app/shared/utils/kware-translate.pipe';

@Component({
  selector: 'ds-browse-by-metadata',
  // styleUrls: ['./browse-by-metadata.component.scss'],
  styleUrls: ['../../../../../app/browse-by/browse-by-metadata/browse-by-metadata.component.scss'],
  // templateUrl: './browse-by-metadata.component.html',
  templateUrl: '../../../../../app/browse-by/browse-by-metadata/browse-by-metadata.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    TranslateModule,
    ThemedLoadingComponent,
    ThemedBrowseByComponent,
        ThemedConfigurationSearchPageComponent,
        NgClass,
        KwareTranslatePipe
  ],
})
export class BrowseByMetadataComponent extends BaseComponent {
}
