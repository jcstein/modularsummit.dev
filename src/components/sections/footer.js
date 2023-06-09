import * as React from "react";
import { footerData } from "../../data/footer/footer-data";
import { Button } from "../elements/button";
import { Twitter } from "../elements/icons.js";

export default function Footer() {
	return (
		<section className='footer py-[50px]'>
			<div className='container'>
				<div className={"flex flex-wrap sm:flex-nowrap items-center max-md:space-y-10 justify-center md:justify-between"}>
					<div className='basis-auto max-md:mb-4 max-md:w-full'>
						<Button
							class={footerData.button.class}
							type={footerData.button.type}
							text={footerData.button.text}
							url={footerData.button.url}
						/>
					</div>
					<div className='basis-full md:basis-auto'>
						<div className='flex flex-wrap items-center justify-center max-md:space-y-10 md:space-x-10'>
							<div className='text-center max-md:w-full text'>Hosted by </div>
							<div>
								<svg width={220} height={57} xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M94.878 22.733h9.67a1.45 1.45 0 0 0 1.438-1.624c-.089-.733-.737-1.27-1.475-1.27H92.488c-.796 0-1.447.65-1.447 1.447v14.472c0 .797.651 1.448 1.447 1.448h12.06c.855 0 1.542-.75 1.438-1.624-.089-.733-.737-1.27-1.475-1.27h-9.633a.943.943 0 0 1-.943-.944v-2.456c0-.52.423-.943.943-.943h7.259a1.45 1.45 0 0 0 1.436-1.623c-.088-.734-.736-1.271-1.474-1.271h-7.22a.943.943 0 0 1-.944-.943v-2.457c0-.52.423-.942.943-.942m-16.64 0c1.616 0 2.966.579 4.076 1.712.265.266.627.41 1.037.41.796 0 1.448-.65 1.448-1.447 0-.41-.193-.796-.604-1.157-1.712-1.617-3.714-2.413-5.957-2.413-2.388 0-4.439.845-6.151 2.557-1.689 1.689-2.533 3.74-2.533 6.127 0 2.388.844 4.438 2.533 6.151 1.712 1.688 3.763 2.533 6.15 2.533 2.389 0 4.439-.845 6.127-2.533.58-.58.58-1.496 0-2.05-.555-.58-1.47-.58-2.05 0-1.133 1.133-2.484 1.688-4.076 1.688-1.592 0-2.967-.555-4.101-1.688-1.134-1.134-1.688-2.509-1.688-4.101s.554-2.943 1.688-4.077c1.134-1.133 2.509-1.712 4.1-1.712M125.4 34.31h-9.63a.944.944 0 0 1-.944-.944V21.324c0-.739-.538-1.387-1.271-1.475a1.451 1.451 0 0 0-1.624 1.437v14.472c0 .797.651 1.448 1.447 1.448h12.06c.855 0 1.543-.75 1.438-1.624-.089-.733-.737-1.27-1.476-1.27m60.9-14.474h-14.434a1.45 1.45 0 0 0-1.437 1.624c.088.733.737 1.27 1.475 1.27h4.808c.52 0 .943.423.943.944v12.082c0 .855.75 1.542 1.624 1.437.733-.088 1.27-.737 1.27-1.475V23.676c0-.521.422-.943.943-.943h4.846c.854 0 1.542-.75 1.437-1.624-.088-.733-.736-1.27-1.475-1.27m7.648 0c-.796 0-1.448.65-1.448 1.447v14.472c0 .797.652 1.448 1.448 1.448.796 0 1.447-.651 1.447-1.448V21.286c0-.796-.65-1.448-1.447-1.448m-28.958 8.515c-1.327-.844-3.112-1.278-5.355-1.278-2.967 0-4.463-.724-4.463-2.171 0-1.448 1.496-2.171 4.463-2.171 1.64 0 3.208.314 4.703.916.869.266 1.472-.048 1.81-.892.289-.748-.097-1.471-.893-1.833-1.664-.724-3.522-1.086-5.62-1.086-2.195 0-3.956.459-5.331 1.351-1.35.893-2.026 2.147-2.026 3.715 0 1.664.675 2.943 2.002 3.787 1.327.844 3.112 1.278 5.355 1.278 2.967 0 4.462.724 4.462 2.171 0 1.447-1.495 2.171-4.462 2.171h-.724c-1.495 0-3.063-.313-4.68-.917-.747-.265-1.519.073-1.833.869-.29.748.145 1.616.893 1.881 1.664.7 3.522 1.062 5.62 1.062h.724c2.195 0 3.956-.459 5.306-1.351 1.375-.893 2.05-2.147 2.05-3.715 0-1.664-.675-2.943-2.001-3.787m-29.566-5.62h9.673c.854 0 1.542-.75 1.437-1.624-.088-.733-.737-1.27-1.475-1.27h-12.023c-.796 0-1.447.65-1.447 1.447v14.472c0 .797.651 1.448 1.447 1.448h12.06c.855 0 1.543-.75 1.438-1.624-.089-.733-.737-1.27-1.475-1.27h-9.635a.94.94 0 0 1-.94-.941V30.91c0-.52.42-.94.94-.94h7.26a1.45 1.45 0 0 0 1.437-1.624c-.088-.734-.736-1.271-1.474-1.271h-7.223a.94.94 0 0 1-.94-.94v-2.462c0-.52.42-.94.94-.94m-81.65 6.085c-.006.174-.243.22-.311.06l-.09-.209a.385.385 0 0 1 .043-.385l.094-.123c.113-.148.275-.126.275.038 0 .214-.005.4-.012.619m-1.245-3.401a.522.522 0 0 1-.897.028 30.497 30.497 0 0 0-2.737-3.614.428.428 0 0 1 .323-.71h.01c2.304 0 3.513.57 3.882 1.265.308.582.213 1.599-.581 3.03m-.515 12.056c-.124.315-.253.627-.39.937-.02.042-.04.085-.063.128-.848 1.633-2.272 2.919-4.174 3.814a.55.55 0 0 1-.767-.644c.632-2.261 1.11-4.713 1.42-7.284.057-.48.294-.92.66-1.235a41.84 41.84 0 0 0 2.184-2.024l.008-.008a.619.619 0 0 1 1.03.26c.663 2.207.7 4.263.092 6.056m-5.172 8.163a25.533 25.533 0 0 1-1.669 1.629c-.231.206-.581-.052-.45-.333l.111-.242c.154-.34.303-.689.448-1.044a.287.287 0 0 1 .194-.169c.365-.092.72-.195 1.067-.306.28-.09.5.25.3.465m-3.799-2.04a22.39 22.39 0 0 1-2.42.212c-2.062.072-4.242-.106-6.48-.518a.29.29 0 0 1-.079-.544c.489-.248.978-.5 1.466-.76 3.426-1.815 6.623-3.8 9.421-5.836a.29.29 0 0 1 .457.284c-.388 2.332-.926 4.528-1.6 6.521a.953.953 0 0 1-.765.64m-.792 3.108c-1.837 3.612-4.099 5.64-6.292 5.6-2.383-.042-4.76-2.524-6.52-6.81l-.002-.004a.54.54 0 0 1 .286-.7l.056-.025a.548.548 0 0 1 .367-.025c3.292.924 6.536 1.406 9.575 1.406a25.838 25.838 0 0 0 2.107-.081.44.44 0 0 1 .423.639m-10.878 6.87c-1.092.14-2.2.212-3.32.212-5 0-9.784-1.417-13.892-4.062-.282-.182-.162-.62.174-.636l.192-.01a27.765 27.765 0 0 0 3.428-.46c2.638-.507 5.57-1.378 8.64-2.55a.543.543 0 0 1 .695.304c0 .002 0 .003.002.005 1.19 2.897 2.654 5.086 4.298 6.478a.41.41 0 0 1-.217.719m-14.88-18.029c2.268-1.846 4.924-3.688 7.839-5.433.062 3.728.471 7.306 1.194 10.539a47.035 47.035 0 0 1-3.226-1.524 45.728 45.728 0 0 1-5.807-3.582m-7.05 9.987c-.542-1.02.157-3.384 3.709-6.977l.002-.002a.884.884 0 0 0-.08-1.315 43.63 43.63 0 0 1-.423-.338.888.888 0 0 0-1.187.062l-.138.139c-1.775 1.822-3.018 3.51-3.714 5.026a.606.606 0 0 1-1.054.082c-2.755-4.165-4.235-9.046-4.235-14.154 0-1.827.19-3.624.558-5.37.056-.264.429-.28.507-.022.534 1.762 1.403 3.585 2.603 5.429 1.617 2.482 3.748 4.868 6.274 7.056.862.747 1.772 1.47 2.722 2.167a47.873 47.873 0 0 0 6.242 3.872 58.04 58.04 0 0 0 2.931 1.445 2.23 2.23 0 0 0 1.73.046c.465-.181.932-.37 1.402-.567a1.12 1.12 0 0 0 .653-1.307l-.038-.153c-.775-3.26-1.206-6.931-1.256-10.776h-.002v-.138c-.003-.21-.002-.422-.005-.631-.002-.067 0-.18.001-.247v-.08h.001a57.082 57.082 0 0 1 .077-2.686h-.001c.239-4.64 1.025-8.999 2.277-12.666a.648.648 0 0 0-.404-.823c-.331-.113-.662-.221-.992-.325a.645.645 0 0 0-.803.407c-1.356 3.983-2.194 8.707-2.417 13.707a1.882 1.882 0 0 1-.92 1.535c-2.96 1.755-5.68 3.615-8.03 5.49a1.3 1.3 0 0 1-1.662-.034c-2.354-2.041-4.336-4.259-5.834-6.56-2.944-4.52-3.644-8.779-1.97-11.989a25.663 25.663 0 0 1 .68-1.071C8.57 11.216 12.15 9.74 16.899 9.573c.3-.01.603-.016.908-.016 2.913 0 6.039.481 9.218 1.398l.21.061c.053.016.107.03.16.047.735.22 1.472.463 2.21.728l.052.019a42.974 42.974 0 0 1 .756.282l.174.066c1.552.602 3.103 1.3 4.635 2.097 2.965 1.54 5.68 3.346 8.041 5.328-4.507 1.032-9.747 3.024-15.015 5.71a.77.77 0 0 0-.419.641c-.018.326-.042.983-.06 1.505a.427.427 0 0 0 .626.392l.003-.002c5.216-2.739 10.422-4.786 14.892-5.868a1.67 1.67 0 0 0 1.26-1.856 45.778 45.778 0 0 0-.278-1.756 2.922 2.922 0 0 0-1.108-1.813 47.513 47.513 0 0 0-6.872-4.342 48.457 48.457 0 0 0-5.046-2.269.636.636 0 0 1-.328-.904c1.744-3.12 3.818-4.867 5.838-4.867h.063c2.384.043 4.76 2.525 6.52 6.81.891 2.169 1.581 4.67 2.053 7.388l-.007-.006c.201 1.16.363 2.358.484 3.588l-.032.02.043.043a57.57 57.57 0 0 1 .026 10.5c-3.188 2.576-7.13 5.14-11.464 7.437a83.064 83.064 0 0 1-4.259 2.104l-.065.03c-.108.05-.216.1-.324.148h-.002a73.954 73.954 0 0 1-3.464 1.464l-.192.075-.24.093-.57.216-.157.06c-.23.085-.46.168-.688.25l-.085.03h-.001c-2.44.869-4.763 1.525-6.88 1.932-5.116.985-7.525.23-8.074-.806m3.675-38.434c4.33-3.101 9.505-4.774 14.937-4.774 1.434 0 2.849.117 4.236.346a.434.434 0 0 1 .2.767C31.145 4.49 29.896 6.048 28.79 8.07c-.27.493-.842.734-1.383.582-3.66-1.031-7.263-1.516-10.59-1.4-1.228.044-2.39.168-3.483.37-.307.056-.473-.345-.22-.526m35.321 18.753a.299.299 0 0 1 .542-.18 23.448 23.448 0 0 1 1.328 2.07.648.648 0 0 1-.084.757 30.108 30.108 0 0 1-1.375 1.412.257.257 0 0 1-.437-.193 60.4 60.4 0 0 0 .026-3.866M45.768 9.39a25.678 25.678 0 0 1 6.146 9 .433.433 0 0 1-.479.59 12.944 12.944 0 0 0-2.491-.177 1.297 1.297 0 0 1-1.305-1.064c-.5-2.806-1.223-5.397-2.152-7.659a25.635 25.635 0 0 0-.16-.382c-.119-.275.224-.515.44-.308M55.5 22.218c-1.109-5.267-3.715-10.106-7.61-14.002C42.59 2.918 35.545 0 28.052 0S13.515 2.918 8.216 8.216a28.352 28.352 0 0 0-3.434 4.158c-.297.395-.563.813-.8 1.25C1.386 17.938 0 22.89 0 28.053c0 7.493 2.918 14.538 8.216 19.836 5.299 5.299 12.344 8.217 19.837 8.217s14.538-2.918 19.836-8.217c2.5-2.5 4.47-5.39 5.854-8.532a9.96 9.96 0 0 0 .444-1.068 28.035 28.035 0 0 0 1.919-10.236c0-1.96-.202-3.887-.59-5.762l-.016-.073m157.137 8.475h-5.306a.648.648 0 0 1-.56-.972l2.661-4.595a.648.648 0 0 1 1.122.002l2.644 4.594a.647.647 0 0 1-.56.97m6.98 4.367-8.37-14.521a1.468 1.468 0 0 0-2.508 0l-8.37 14.521a1.31 1.31 0 0 0-.165.574c-.053.82.584 1.553 1.406 1.572.573.014 1.019-.275 1.364-.892l1.294-2.25a.949.949 0 0 1 .823-.476h9.78a.95.95 0 0 1 .823.476l1.294 2.25c.327.584.768.874 1.3.892.812.027 1.499-.634 1.499-1.447 0-.217-.049-.434-.17-.699'
										fill='#000'
										fillRule='evenodd'
									/>
								</svg>
							</div>
							<div>
								<svg width={203} height={24} xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M12.043 17.418h-.15L2.765 4.601V24H0V0h2.87L12 13.096 21.13 0H24v24h-2.828V4.56l-9.13 12.858ZM49.026 3.167l-5.773 12.155H54.77L49.026 3.167ZM61.916 24H58.85l-2.958-6.293H42.138l-3 6.293h-2.923L47.733 0h2.68L61.93 24h-.015ZM87.61 0h3.031L79.896 24h-2.5L66.641 0h3.144l8.888 20.53L87.604 0h.007Zm35.429 2.477h-15.768v8.19h14.102v2.47h-14.102v8.393h15.943V24h-18.857V0h18.667v2.47l.015.007ZM151.825 0h2.675v24h-2.185L136.603 4.322V24h-2.675V0h2.572l15.325 19.23V0Zm25.778 0h2.184v24h-2.943V2.79l-4.92 1.4-.708-2.182L177.603 0Zm22.285 0h2.183v24h-2.943V2.79l-4.92 1.4-.708-2.182L199.888 0Z'
										fill='#000'
										fillRule='nonzero'
									/>
								</svg>
							</div>
						</div>
					</div>
					{/* <div className='flex flex-1 justify-center sm:justify-end space-x-[24px] basis-auto sm:basis-full'> */}
					{/* <div className='basis-auto'>
							<a className='icon' href={footerData.social.discord} target='_blank' rel='noreferrer noopener'>
								<Discord />
							</a>
						</div>
						<div className='basis-auto'>
							<a className='icon' href={footerData.social.github} target='_blank' rel='noreferrer noopener'>
								<Github />
							</a>
						</div>
						<div className='basis-auto'>
							<a className='icon' href={footerData.social.github} target='_blank' rel='noreferrer noopener'>
								<Telegram />
							</a>
						</div> */}
					<div className='basis-auto'>
						<a className='icon' href={footerData.social.twitter} target='_blank' rel='noreferrer noopener'>
							<Twitter />
						</a>
					</div>
					{/* </div> */}
				</div>
			</div>
		</section>
	);
}
