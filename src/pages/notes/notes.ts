// Components, functions, plugins
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { Database } from './../../providers/database/database';
import { Localstorage } from './../../providers/localstorage/localstorage';

declare var dateFormat: any;

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NotesPage {

	public notesTue: any[] = [];
	public notesWed: any[] = [];
	public notesThu: any[] = [];
	public notesFri: any[] = [];
	public notesSat: any[] = [];
	public EntryTerms: string;

	constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				private storage: Storage,
				private databaseprovider: Database,
				private cd: ChangeDetectorRef,
				public loadingCtrl: LoadingController,
				private localstorage: Localstorage) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad: NotesPage');
	}

	ionViewDidEnter() {
		console.log('ionViewDidEnter: NotesPage');
		
		// Load / refresh data when coming to this page
		this.LoadData();
	}

	LoadData() {

		// Load initial data set here

		//let loading = this.loadingCtrl.create({
		//	spinner: 'crescent',
		//	content: 'Please wait...'
		//});


		// Blank and show loading info
		this.notesTue = [];
		this.notesWed = [];
		this.notesThu = [];
		this.notesFri = [];
		this.notesSat = [];
		this.cd.markForCheck();
		
		// Temporary use variables
		var flags;
		var DisplayLocation = "";
		var dbEventDateTime;
		var SQLDate;
		var DisplayDateTime;
		var AgendaButtonText;
		var visEventName;
		var ButtonStyle = "";
		var visEventNote = "";
		
		// Get the data
		var AttendeeID = this.localstorage.getLocalValue('AttendeeID');

		if (AttendeeID !='' && AttendeeID != null) {
			
			//loading.present();

			// -------------------
			// Get data: Tuesday
			// -------------------
			flags = "2019-06-01|li";
			
			this.databaseprovider.getNotesData(flags, AttendeeID).then(data => {
				
				console.log("getNotesData: " + JSON.stringify(data));

				if (data['length']>0) {
					
					for (var i = 0; i < data['length']; i++) {

						// Display start time
						dbEventDateTime = data[i].session_start_time.substring(0, 19);
						dbEventDateTime = dbEventDateTime.replace(/-/g, '/');
						dbEventDateTime = dbEventDateTime.replace(/T/g, ' ');
						SQLDate = new Date(dbEventDateTime);
						DisplayDateTime = dateFormat(SQLDate, "mm/dd h:MMtt");

						// Display end time
						dbEventDateTime = data[i].session_end_time.substring(0, 19);
						dbEventDateTime = dbEventDateTime.replace(/-/g, '/');
						dbEventDateTime = dbEventDateTime.replace(/T/g, ' ');
						SQLDate = new Date(dbEventDateTime);
						DisplayDateTime = DisplayDateTime + " to " + dateFormat(SQLDate, "h:MMtt");

						visEventName = data[i].session_title;
						visEventNote = "Note: " + data[i].Note.substr(0, 30) + " ...";
						
						console.log("EventID: " + data[i].session_id);
						
						this.notesTue.push({
							CourseName: visEventName,
							visEventTimeframe: DisplayDateTime + " in " + data[i].RoomName,
							EventID: data[i].session_id,
							NoteBeginning: visEventNote
						});

					}


				} else {
					
					this.notesTue.push({
						CourseName: "No notes have been taken for sessions on this day",
						visEventTimeframe: "",
						EventID: 0,
						NoteBeginning: ""
					});

				}

				this.cd.markForCheck();

				// -------------------
				// Get data: Wednesday
				// -------------------
				flags = "2019-06-02|li";
				
				this.databaseprovider.getNotesData(flags, AttendeeID).then(data => {
					
					console.log("getNotesData: " + JSON.stringify(data));

					if (data['length']>0) {
						
						for (var i = 0; i < data['length']; i++) {

							// Display start time
							dbEventDateTime = data[i].session_start_time.substring(0, 19);
							dbEventDateTime = dbEventDateTime.replace(/-/g, '/');
							dbEventDateTime = dbEventDateTime.replace(/T/g, ' ');
							SQLDate = new Date(dbEventDateTime);
							DisplayDateTime = dateFormat(SQLDate, "mm/dd h:MMtt");

							// Display end time
							dbEventDateTime = data[i].session_end_time.substring(0, 19);
							dbEventDateTime = dbEventDateTime.replace(/-/g, '/');
							dbEventDateTime = dbEventDateTime.replace(/T/g, ' ');
							SQLDate = new Date(dbEventDateTime);
							DisplayDateTime = DisplayDateTime + " to " + dateFormat(SQLDate, "h:MMtt");

							visEventName = data[i].session_title;
							visEventNote = "Note: " + data[i].Note.substr(0, 30) + " ...";
							
							console.log("EventID: " + data[i].session_id);
							
							this.notesWed.push({
								CourseName: visEventName,
								visEventTimeframe: DisplayDateTime + " in " + data[i].RoomName,
								EventID: data[i].session_id,
								NoteBeginning: visEventNote
							});

						}


					} else {
						
						this.notesWed.push({
							CourseName: "No notes have been taken for sessions on this day",
							visEventTimeframe: "",
							EventID: 0,
							NoteBeginning: ""
						});

					}

					this.cd.markForCheck();

					// -------------------
					// Get data: Thursday
					// -------------------
					flags = "2019-06-03|li";
					
					this.databaseprovider.getNotesData(flags, AttendeeID).then(data => {
						
						console.log("getNotesData: " + JSON.stringify(data));

						if (data['length']>0) {
							
							for (var i = 0; i < data['length']; i++) {

								// Display start time
								dbEventDateTime = data[i].session_start_time.substring(0, 19);
								dbEventDateTime = dbEventDateTime.replace(/-/g, '/');
								dbEventDateTime = dbEventDateTime.replace(/T/g, ' ');
								SQLDate = new Date(dbEventDateTime);
								DisplayDateTime = dateFormat(SQLDate, "mm/dd h:MMtt");

								// Display end time
								dbEventDateTime = data[i].session_end_time.substring(0, 19);
								dbEventDateTime = dbEventDateTime.replace(/-/g, '/');
								dbEventDateTime = dbEventDateTime.replace(/T/g, ' ');
								SQLDate = new Date(dbEventDateTime);
								DisplayDateTime = DisplayDateTime + " to " + dateFormat(SQLDate, "h:MMtt");

								visEventName = data[i].session_title;
								visEventNote = "Note: " + data[i].Note.substr(0, 30) + " ...";

								this.notesThu.push({
									CourseName: visEventName,
									visEventTimeframe: DisplayDateTime + " in " + data[i].RoomName,
									EventID: data[i].session_id,
									NoteBeginning: visEventNote
								});

							}


						} else {
							
							this.notesThu.push({
								CourseName: "No notes have been taken for sessions on this day",
								visEventTimeframe: "",
								EventID: 0,
								NoteBeginning: ""
							});

						}

						this.cd.markForCheck();
						
						// -------------------
						// Get data: Friday
						// -------------------
						flags = "2019-06-04|li";
						
						this.databaseprovider.getNotesData(flags, AttendeeID).then(data => {
							
							console.log("getNotesData: " + JSON.stringify(data));

							if (data['length']>0) {
								
								for (var i = 0; i < data['length']; i++) {

									// Display start time
									dbEventDateTime = data[i].session_start_time.substring(0, 19);
									dbEventDateTime = dbEventDateTime.replace(/-/g, '/');
									dbEventDateTime = dbEventDateTime.replace(/T/g, ' ');
									SQLDate = new Date(dbEventDateTime);
									DisplayDateTime = dateFormat(SQLDate, "mm/dd h:MMtt");

									// Display end time
									dbEventDateTime = data[i].session_end_time.substring(0, 19);
									dbEventDateTime = dbEventDateTime.replace(/-/g, '/');
									dbEventDateTime = dbEventDateTime.replace(/T/g, ' ');
									SQLDate = new Date(dbEventDateTime);
									DisplayDateTime = DisplayDateTime + " to " + dateFormat(SQLDate, "h:MMtt");

									visEventName = data[i].session_title;
									visEventNote = "Note: " + data[i].Note.substr(0, 30) + " ...";

									this.notesFri.push({
										CourseName: visEventName,
										visEventTimeframe: DisplayDateTime + " in " + data[i].RoomName,
										EventID: data[i].session_id,
										NoteBeginning: visEventNote
									});

								}


							} else {
								
								this.notesFri.push({
									CourseName: "No notes have been taken for sessions on this day",
									visEventTimeframe: "",
									EventID: 0,
									NoteBeginning: ""
								});

							}

							this.cd.markForCheck();

							// -------------------
							// Get data: Saturday
							// -------------------
							flags = "2019-06-05|li";
							
							this.databaseprovider.getNotesData(flags, AttendeeID).then(data => {
								
								console.log("getNotesData: " + JSON.stringify(data));

								if (data['length']>0) {
									
									for (var i = 0; i < data['length']; i++) {

										// Display start time
										dbEventDateTime = data[i].session_start_time.substring(0, 19);
										dbEventDateTime = dbEventDateTime.replace(/-/g, '/');
										dbEventDateTime = dbEventDateTime.replace(/T/g, ' ');
										SQLDate = new Date(dbEventDateTime);
										DisplayDateTime = dateFormat(SQLDate, "mm/dd h:MMtt");

										// Display end time
										dbEventDateTime = data[i].session_end_time.substring(0, 19);
										dbEventDateTime = dbEventDateTime.replace(/-/g, '/');
										dbEventDateTime = dbEventDateTime.replace(/T/g, ' ');
										SQLDate = new Date(dbEventDateTime);
										DisplayDateTime = DisplayDateTime + " to " + dateFormat(SQLDate, "h:MMtt");

										visEventName = data[i].session_title;
										visEventNote = "Note: " + data[i].Note.substr(0, 30) + " ...";

										this.notesSat.push({
											CourseName: visEventName,
											visEventTimeframe: DisplayDateTime + " in " + data[i].RoomName,
											EventID: data[i].session_id,
											NoteBeginning: visEventNote
										});

									}


								} else {
									
									this.notesSat.push({
										CourseName: "No notes have been taken for sessions on this day",
										visEventTimeframe: "",
										EventID: 0,
										NoteBeginning: ""
									});

								}

								this.cd.markForCheck();

								//loading.dismiss();

							}).catch(function () {
								console.log("Promise Rejected");
							});

						}).catch(function () {
							console.log("Promise Rejected");
						});

					}).catch(function () {
						console.log("Promise Rejected");
					});
					
				}).catch(function () {
					console.log("Promise Rejected");
				});

			}).catch(function () {
				console.log("Promise Rejected");
			});
			
		} else {
			console.log('User not logged in');
			//loading.dismiss();
		}
			
	}

    NoteDetails(EventID) {
		
		console.log("NoteDetails: " + EventID);
		
        if (EventID != 0) {
            // Navigate to Exhibitor Details page
			this.navCtrl.push('NotesDetailsPage', {EventID: EventID}, {animate: true, direction: 'forward'});
        }

    };

    GetSearchResults() {

        var SearchTerms = this.EntryTerms;

        if ((SearchTerms == undefined) || (SearchTerms == "")) {
            // Do nothing or show message
			
        } else {

            this.localstorage.setLocalValue("SearchTerms", SearchTerms);
			this.navCtrl.push('SearchResultsPage', {SearchTerms: SearchTerms}, {animate: true, direction: 'forward'});

        }
    };

}
