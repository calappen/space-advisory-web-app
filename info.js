// server code

// create data objects
var USML = {
	title: "USML",
	img: "pics/usml_cat.png",
	info: "Is your item on the USML?",
	metadata: "",
	keyterms: [],
	options: [["Yes",],["No",],["Yes, Dual License",]],
	header: "United States Munition List",
	data: "The USML is a list of articles, services, and related technical data designated as defense articles pursuant to the Arms Export Control Act. <br><br> All items on this list require export authorization <br><br> The USML is organized into 21 categories. <br><br> The most relevant categories to the space industry are Categories IV and XV. They are described in the image to the right.<br><br>To see the complete list of all categories on the USML click this <a target='_blank' href='https://www.ecfr.gov/cgi-bin/text-idx?mc=true&node=se22.1.121_11&rgn=div8'>link.</a> <br><br>"
}

var ITAR_Controls = {
	title: "ITAR",
	img: "",
	info: "Learn more about ITAR",
	metadata: "Your item is on the USML and governed by ITAR controls",
	keyterms: [],
	options: [["Continue",]],
	header: "ITAR Controls",
	data: "If your item is on the USML then it is governed by ITAR controls. These controls are put in place to regulate the export of technologies that are related to national security and defense. They are stricter than EAR controls and are necessary for any item or service that fall under the USML. There are no exceptions. Press 'Continue' below to learn more about how to apply for an ITAR license or agreement."
}
var Dual_License = {
	title: "Dual License",
	img: "",
	info: "Do you think you'll need a dual license?",
	metadata: "You need a dual license",
	keyterms: [],
	options: [["Yes",],["No",]],
	header: "Dual License",
	data: "Even if your item is on the CCL it may still be subject to ITAR controls. \
	This is the case when your item is classified by the CCL but is used in a product that is on the USML. \
	To check if this is true for your project you can look through Categories IV and XV of the USML. \
	Look to see if your item is used in any of the items mentioned. \
	Clicking yes will take you to a page to help determine if your item is on the USML."

}
var ITAR_Apply = {
	title: "ITAR Licenses and Agreements",
	img: "",
	info: "Are you exporting an article or a service?",
	metadata: "",
	keyterms: [],
	options: [["Article",],["Service",]],
	header: "Applying for an ITAR license or agreement",
	data: "Exporting an item subject to the ITAR is different for for articles and services. The first step for both however, is to register with the State DDC. This process provides information about export regualtions to the defense industry and information about the defense industry to the US government.  \
	<br><br> \
	Registration must be done electronically. Keep in mind the average review time is 45 days. The fee schedule is as follows:\
	<br><br> \
	1. New - $2,250 \
	<br> \
	2. Renewal - $2,750 \
	<br><br> \
	There is also a minimum fee of $2,750 or 3% of the total value of the export items. \
	<br><br> \
	For more infomation regarding the registration process visit this <a href='www.pmddtc.state.gov/registration'>link</a>."
}

var ITAR_Apply_Article = {
	title: "Apply for ITAR License",
	img: "",
	info: "How do I apply for an ITAR license? (articles)",
	metadata: "",
	keyterms: [],
	options: [["Continue",]],
	header: "Applying for an ITAR license.",
	data: "If you are exporting or temporarily importing a defense article subject to the USML you can receive authorization through an electronic licensing system called DTrade. Access will be granted after registration with the DDTC. There are three different application forms: \
	<br><br> \
	1. Permanent Export: Form DSP-5 \
	<br> \
	2. Temporary Import: Form DSP-61 \
	<br> \
	2. Temporary Export: Form DSP-73\
	<br><br> \
	Visit this <a href='www.pmddtc.state.gov/registration'>link</a> to access these forms and get more information."
}

var ITAR_Apply_Service = {
	title: "Apply for ITAR Agreement",
	img: "",
	info: "How do I apply for an ITAR agreement? (services)",
	metadata: "",
	keyterms: [],
	options: [["Continue",]],
	header: "Applying for an ITAR agreement.",
	data: "If you are exporting a defense service you will require a DDTC-approved agreement. There are three agreements.  \
	<br><br> \
	1. Technical Assistance Agreement (TAA) \
	<br> \
	2. Manufacturing License Agreement (MLA) \
	<br> \
	3. Warehouse and Distribution Agreement (WDA)"
}



var Is_Dual_License = {
	title: "Dual License cont",
	img: "",
	info: "more info on dual license",
	metadata: "",
	keyterms: [],
	options: [["Continue",]]
}
var EAR_Controls = {
	title: "EAR Controls",
	img: "Your item is not on the USML and is governed by EAR controls",
	info: "stuff on EAR",
	metadata: "",
	keyterms: [],
	options: [["Continue",]]
}
var ECCN = {
	title: "ECCN",
	img: "pics/eccnNotation.png",
	info: "Can you find an ECCN that describes your item? ",
	metadata: "Your item is on the CCL",
	keyterms: [],
	options: [["Yes",],["No",]],
	header: "Commerce Control List (CCL)",
	data: "If your item is not on the USML then it is most likely on the Commerce Control List, or CCL. \
	<br><br> \
	The CCL is a list of commercial or dual use items subject to the EAR. \
	<br><br> \
	The CCL is divided into ten broad categories. Each category is further divided into five product groups: (A) Equipment, Assemblies, and Components; (b) Test, Inspection, and Production Equipment; (C) Materials; (D) Software; and (E) Technology. \
	<br><br> \
	Each item that falls into a specific category and product group is given an Export Control Classification Number (ECCN). \
	<br><br> \
	For the space industry, Category 9 (Aerospace and Propulsion) is most relevant. \
	<br><br> \
	Use the following <a href='https://www.bis.doc.gov/index.php/documents/regulations-docs/2340-ccl9-4/file'>pdf</a> to try and find an ECCN number that describes your product. \
	<br><br> \
	To see a complete list of all categories and product groups on the CCL as well as other regulation documents, click this <a href='https://www.bis.doc.gov/index.php/regulations/export-administration-regulations-ear'>link.</a> \
	<br><br> \
	Each ECCN has control policies associated with it. These are shown using two letter codes. \
	<br><br> \
	The images on the right explain how to decode control policies and ECCNs. \
	<br><br> \
	To continue, enter the ECCN you think best describes your item, or click not sure."
}
var STA = {
	title: "STA?",
	img: "",
	info: "Is your item eligible for an STA or other license exception?",
	metadata: "Your item is eligible for an STA or other license exception",
	keyterms: [],
	options: [["Yes",],["No",]],
	header: "License exceptions",
	data: "Once you have determined that your item is on the CCL, the next step is to see if there are license  exceptions for your item. There are multiple different kinds of license exceptions. \
	<br><br> \
	The first of these is a Strategic Trade Authorization (STA) license exception. If your item is eligible this allows for unlicensed export and re-export to 36 NATO countries and certain other allies. \
	<br><br> \
	If your item is not eligible for an STA, it may still be eligible for other license exceptions. Each of these exceptions is designated by a 3 letter-letter code. Some examples include Limited Value Shipments (LVS), government and International Organizations (GOV), and Aircraft Vessels and Spacecraft (AVS). \
	<br><br> \
	To see if you are eligible for an STA exception, use this <a href='www.bis.doc.gov/statool'>link</a>"
}


var File_Exception = {
	title: "File Exception",
	img: "",
	info: "How to export item using license exception",
	metadata: "",
	keyterms: [],
	options: [["Continue",]],
	header: "Export with license exceptions",
	data: "If you are eligbible for a license exception the first step is to apply for an Automated Commercial Environment (ACE) account. This system is used by the US goverment to control and process most imported and exported goods. The application form can be found <a href='https://ace.cbp.dhs.gov/acexpub/acexpub_Apps/ExporterAccountApplication/expForm.php'>here</a>. \
	<br><br> \
	Through your new ACE account you can access the Automated Export System (AES) to file your Electronic Export Information (EEI). You will need the following to do this: \
	<br><br> \
	<br> \
	1. Letter of Intent (LOI) \
	<br> \
	2. EIN \
	<br> \
	3. Correct license code corresponding to license exception \
	<br> \
	4. ECCN \
	<br> \
	5. Item description \
	<br> \
	6. Destination Control Statement (DCS) \ <br> \
	7. Power of attorney \
	<br><br> \
	More information on how to fill out your EEI can be found at this <a href='https://www.space.commerce.gov/wp-content/uploads/2017-export-controls-guidebook.pdf'>link</a>"

}
var Other_License = {
	title: "Other License Exception",
	img: "",
	info: "???",
	metadata: "Your item has other license exceptions",
	keyterms: [],
	options: [["Yes",],["No",]]
}
var EAR99 = {
	title: "EAR99",
	img: "",
	info: "Information on EAR99",
	metadata: "",
	keyterms: [],
	options: [["Continue",]],
	header: "No license required!",
	data: "If you cannot find an ECCN for your item then it does not require a license for export."
}
var End_User = {
	title: "End user of concern?",
	img: "",
	info: "3.3",
	metadata: "You are the end user of concern",
	keyterms: [],
	options: [["Yes",],["No",]]
}
var Part_744 = {
	title: "Part 744",
	img: "",
	info: "Of EAR",
	metadata: "",
	keyterms: [],
	options: [["Continue",]]
}
var Apply_License = {
	title: "Apply for export license",
	img: "",
	info: "Apply for an EAR License",
	metadata: "",
	keyterms: [],
	options: [["Continue",]],
	header: "EAR License Application",
	data: "If your item is not eligible for a license exception then you are required to apply for an export license. \
	<br><br> \
	You can apply for an EAR export license online through the Simplified Network Application Process (SNAP-R). \
	<br><br> \
	In order to apply for a license you must first hace a Company Identification Number (CIN) and a SNAP-R user account. You can sign up for an account via this <a href='snapr.bis.doc.gov/snapr'>link</a> \
	<br><br> \
	Be aware that it can take up to 45 days for your application to be processed."
}
var Step2 = {
	title: "Filing Procedures",
	img: "",
	info: "File the correct license or exception",
	metadata: "",
	keyterms: [],
	options: [["Continue",]],
	header: "Your path so far",
	data: "This will display your progress to this point, outlining how your item is classified and what licenses, exceptions, agreements, etc... need to be filled out. \
	<br><br> \
	Will include disclaimer again as well. \
	<br><br> \
	Press continue to learn more about compliance after authorization and penalties."
}
var Step3 = {
	title: "Compliance",
	img: "",
	info: "Compliance after authorization",
	metadata: "",
	keyterms: [],
	options: [["License Exception",],["ITAR License",],["EAR License",],["EAR99",]],
	header: "Staying compliant during and after export",
	data: "Even after you receive the required exceptions or licenses for your product it is important to contantly stay updated and informed about the law in order to stay compliant. \
	<br><br> \
	Choose one of the options below to explore the additional things to keep in mind for each of the forms of export."
}
var License_Exceptions_Compliance = {
	title: "License Exceptions Compliance",
	img: "",
	info: "How can I stay compliant?",
	metadata: "",
	keyterms: [],
	options: [["Continue",]],
	header: "Compliance with License Exceptions",
	data: "Depending on the license exception you qualify for you may be required to provide additional documentation of your export. Below are two examples. \
	<br><br> \
	- (LVS) Limited Value Shipment Exception will require proof that the yearly value limit has not been exceeded. \
	<br><br> \
	- (TMP) Temporary Imports Exception requires proof that the items have been either returned or destroyed. \
	<br><br> \
	For detailed documentation on what your exception requires read section 740 of the EAR."
}
var EAR_License_Compliance = {
	title: "EAR License Compliance",
	img: "",
	info: "How can I stay compliant?",
	metadata: "",
	keyterms: [],
	options: [["Continue",]],
	header: "Compliance with EAR licensing",
	data: "The BIS recommends that all groups working under EAR should file an Export Management and Compliance Progam (EMCP). An EMCP is a detailed description of export procedures and rules that allow the organization to ensure compliance with EAR regulations. \
	<br><br> \
	To learn more about developing an EMCP visit this <a href='https://www.bis.doc.gov/compliance-a-training/export-management-a-compliance/compliance'>link</a>."
}
var ITAR_License_Compliance = {
	title: "ITAR License Compliance",
	img: "",
	info: "How can I stay compliant?",
	metadata: "",
	keyterms: [],
	options: [["Continue",]],
	header: "ITAR License Compliance",
	data: "Staying compliant under ITAR regulations is a two part process: \
	<br><br> \
	1. Assign an Empowered Official - This individual will be in charge of signing all license applications and other documentation. \
	<br>\
	2. Create a Compliance Agreement - This document will outline policies and procedures that must be followed to stay compliant. \
	<br><br> \
	To learn about what to include in a compliance agreement visit this <a href='https://www.bis.doc.gov/compliance-a-training/export-management-a-compliance/compliance'>link</a>."
}
var EAR99_Compliance = {
	title: "EAR99 Compliance",
	img: "",
	info: "How can I stay compliant?",
	metadata: "",
	keyterms: [],
	options: [["Continue",]],
	header: "EAR99 Compliance",
	data: ""
}

var Dual_License_Apply = {
	title: "Dual License Apply",
	img: "",
	info: "How to apply for a dual license?",
	metadata: "",
	keyterms: [],
	options: [["Continue",]],
	header: "Dual License Apply",
	data: "If you are item is on both the USML and the CCL then you must apply for a dual license to export..."
}






var glossary = [
	["ACE – Automated Commercial Environment", "The primary system through which the trade community reports imports and exports and the government determines admissibility."],
	["AECA – Arms Export Control Act", "The statute that authorizes the export and temporary import control activities of the Department of State."],
	["AES – Automated Export System", "The central point through which export shipment data required by multiple agencies is filed electronically to the U.S. Customs and Border Protection Agency."],
	["BIS – Bureau of Industry and Security", "An agency of the Department of Commerce that is responsible for administering and enforcing export controls on dual use items."],
	["CCL – Commerce Control List", "A list of items (commodities, software, and technology) subject to the Department of Commerce, Bureau of Industry and Security (BIS) export controls."],
	["CFR – Code of Federal Regulations", "The official codification of the general and permanent rules published in the Federal Register by the executive departments and agencies of the federal government."],
	["CJ – Commodity Jurisdiction", "A determination as to whether an item or service is subject to the export licensing authority of the Department of Commerce or the Department of State, Directorate of Defense Trade Controls (DDTC)."],
	["Deemed Export", "Release or transfer of “technology” or source code to a foreign person in the United States."],
	["DDTC – Directorate of Defense Trade Controls", "The office in the Department of State that administers licenses for defense services and defense (munitions) articles."],
	["DTAG – Defense Trade Advisory Group", "An advisory committee that provides the Bureau of Political-Military Affairs with a formal channel for regular consultation and coordination with U.S. private sector defense exporters and defense trade specialists on issues involving U.S. laws, policies, and regulations for munitions exports."],
	["DTSA – Defense Technology Security Administration", "An agency of the Department of Defense responsible for the development and implementation of policies on international transfers of defense-related munitions technology. The DTSA is also involved in the review of certain dual use export license applications."],
	["Dual Use", "Items that have both commercial and military or proliferation applications."],
	["EAA – Export Administration Act", "The statute that authorizes the export control and anti-boycott compliance activities of the Department of Commerce."],
	["EAR – Export Administration Regulations", "Regulations set forth in sections 730-774 of Title 15 of the Code of Federal Regulations and issued by the Department of Commerce to implement the Export Administration Act and other statutory requirements."],
	["ECCN – Export Control Classification Number", "A five character alphanumeric designation used on the Commerce Control List (CCL) to identify a dual-use item for export control purposes."],
	["ECR – Export Control Reform", "A fundamental reform of the U.S. export control system designed to enhance U.S. national security and the competitiveness of key U.S. manufacturing and technology sectors by focusing on current threats, as well as adapting to the changing economic and technological landscape."],
	["EEI – Electronic Export Information", "Electronic export data as filed in the Automated Export System (AES) for U.S. exports that contain a single commodity’s value exceeding US $2,500.00. The information collected by the Census Bureau is used for statistical purposes while the Bureau of Industry and Security and other export enforcement agencies uses it for export control and enforcement purposes."],
	["EMCD – Export Management and Compliance Program", "An optional program developed by the Bureau of Industry and Security to assist companies in complying with the export control provisions of the Export Administration Regulations."],
	["Export", "(1) An actual shipment or transmission out of the United States, including the sending or taking of an item out of the United States, in any manner; (2) releasing or otherwise transferring “technology” or source code 70 | A P P E N D I X C to a foreign person in the United States (a “deemed export”) (3) transferring by a person in the United States of registration, control, or ownership of: (i) a spacecraft subject to the EAR that is not eligible for export under License Exception STA to a person in or a national of any other country (ii) any other spacecraft subject to export controls to a person in or a national of a Country Group D:5 country."],
	["Hosted payload", "A complement of equipment or sensors that uses the available or excess capacity (mass, volume, power, etc.) of a spacecraft to accommodate an additional, independent mission which does not dictate control or operation of the spacecraft."],
	["ITAR – International Traffic in Arms Regulations", "Regulations set forth in Sections 120-130 of Title 22 of the Code of Federal Regulations and issued by the Department of State to implement the Arms Export Control Act and other statutory requirements."],
	["MTCR – Missile Technology Control Regime", "A multilateral control regime consisting of the United States and other nations that have agreed to guidelines for restricting the export of dual use items that may contribute to the development of missiles."],
	["MTEC – Missile Technology Export Committee", "An interagency group, chaired by a representative of the Department of State, that reviews export license applications involving items controlled for missile technology reasons."],
	["Primary payload", "That complement of equipment designed from the outset to accomplish the prime mission function of the spacecraft payload mission set."],
	["Re-export", "(1) An actual shipment or the transmission of items subject to export regulations from one foreign country to another foreign country; (2) release or transfer of technical data or source code to a foreign person of a country other than the foreign country where the release or transfer takes place (a deemed re-export); (3) transfer of registration, control, or ownership of (i) any a spacecraft subject to export regulations that is not eligible for re-export under License Exception STA to a person in or a national of any other country; or (ii) any other spacecraft subject to the EAR to a person in or a national of Country Group D:5 country."],
	["Secondary payload", "That complement of equipment designed from the outset to be fully integrated into the spacecraft payload mission set. The secondary payload may operate separately from the primary payload."],
	["SME – Significant Military Equipment", "Articles for which special export controls are warranted because of their capacity for substantial military utility or capability."],
	["SNAP-R – Simplified Network Application Process Redesign", "An electronic method of submitting EAR export license applications."],
	["Space Qualified", "An item designed, manufactured, or qualified through successful testing, for operation at altitudes greater than 100 kilometers (km) above the surface of the Earth."],
	["Specially Designed", "An “item” that: (1) as a result of “development” has properties peculiarly responsible for achieving or exceeding the performance levels, characteristics, or functions in the relevant ECCN or U.S. Munitions List (USML) paragraph; or (2) Is a “part,” “component,” “accessory,” “attachment,” or “software” for use in or with a commodity or defense article ‘enumerated’ or otherwise described on the CCL or the USML."],
	["ST – Strategic Trade Authorization", "A license exception that authorizes, with conditions, the export, re-export, and transfer (in-country) of specified items to destinations that pose relatively low risk of unauthorized uses."],
	["TAA – Technical Assistance Agreement", "An agreement (e.g., contract) for the performance of a defense service(s) or the disclosure of technical data, as opposed to an agreement granting a right or license to manufacture defense articles. Assembly of defense articles is included under this section, provided production rights or manufacturing know-how are not conveyed."],
	["TCP – Technology Control Plan", "A formal plan required in cases when foreign nationals are employed at or assigned to security-cleared facilities or facilities that handle export-controlled items or information."],
	["TTCP – Technology Transfer Control Plan", "A detailed course of action that the exporter provides to the Department of State when applying for an ITAR license that explains how the exporter will maintain appropriate controls during the process of exporting items or services on the United States Munitions List."],
	["USML – United States Munitions List", "The list of defense articles, technology, and services under the export and temporary import jurisdiction of the Department of State. The USML is found in Part 121 of the ITAR."]
];

//CREATE DECISION TREE
USML.options[0][1] = ITAR_Controls;
USML.options[1][1] = ECCN;
USML.options[2][1] = Dual_License_Apply;

Dual_License_Apply.options[0][1] = Step2;

ITAR_Controls.options[0][1] = ITAR_Apply;

Dual_License.options[0][1] = USML;
Dual_License.options[1][1] = STA;

EAR_Controls.options[0][1] = ECCN;

ECCN.options[0][1] = Dual_License;
ECCN.options[1][1] = EAR99;

STA.options[0][1] = File_Exception;
STA.options[1][1] = Apply_License;

//Other_License.options[0][1] = File_Exception;
//Other_License.options[1][1] = Apply_License;

EAR99.options[0][1] = Step2;

//End_User.options[0][1] = Part_744;
//End_User.options[1][1] = "done" // change to point to a new page

//Part_744.options[0][1] = Step2;

ITAR_Apply.options[0][1] = ITAR_Apply_Article;
ITAR_Apply.options[1][1] = ITAR_Apply_Service;


ITAR_Apply_Article.options[0][1] = Step2;
ITAR_Apply_Service.options[0][1] = Step2;

Is_Dual_License.options[0][1] = Step2;

File_Exception.options[0][1] = Step2;

Apply_License.options[0][1] = Step2;

Step2.options[0][1] = Step3;

Step3.options[0][1] = License_Exceptions_Compliance;
Step3.options[1][1] = ITAR_License_Compliance;
Step3.options[2][1] = EAR_License_Compliance;
Step3.options[3][1] = EAR99_Compliance;
