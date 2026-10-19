import { useMemo, useState } from 'react';
import {
  Avatar, Badge, Button, Callout, Card, Dialog, DropdownMenu, Flex, Grid,
  Heading, IconButton, Progress, ScrollArea, Select, Separator, Switch,
  Tabs, Text, Theme, Tooltip,
} from '@radix-ui/themes';
import {
  ArrowRightIcon, CalendarIcon, CheckCircledIcon, ChevronRightIcon, ClockIcon,
  DashboardIcon, DownloadIcon, ExclamationTriangleIcon, FileTextIcon, GearIcon,
  GlobeIcon, HamburgerMenuIcon, MixIcon, MobileIcon, PaperPlaneIcon, PersonIcon,
  PlusIcon, ReloadIcon, RowsIcon, SewingPinIcon, Share1Icon, UpdateIcon,
} from '@radix-ui/react-icons';

const events = [
  { name:'Bygg Reis Deg 26', client:'Norges Varemesse · Lillestrøm', date:'18–20 Oct', days:'3 production days', services:['PHOTO','VIDEO'], delivery:'Highlights + recap', crew:'6 / 7', state:'Needs review', tone:'orange', warning:'1 uncovered priority · 2 changes' },
  { name:'DNB NXT Oslo', client:'DNB · The Hub', date:'24 Oct', days:'08:00–18:00', services:['PHOTO'], delivery:'Same-day highlights', crew:'3 / 3', state:'Ready', tone:'green', warning:'Published · all acknowledged' },
  { name:'Nordic Impact Week', client:'Katapult · Sentralen', date:'02–04 Nov', days:'3 production days', services:['VIDEO'], delivery:'Recap + verticals', crew:'2 / 4', state:'Building team', tone:'blue', warning:'Schedule still missing' },
];

const people = [
  ['KC','Kai Chen','indigo'], ['MN','Mia Nilsen','orange'], ['JL','Jonas Lund','green'], ['SA','Selma Aas','purple'],
];

const roles = [
  ['Lead photographer','Photo responsibility · all 3 days','1','Kai Chen','Confirmed',100],
  ['Photographers','Main stage, expo hall, sponsor rounds','3','3 / 3','Covered',100],
  ['Lead videographer','Recap film + interview direction','1','Mia Nilsen','Confirmed',100],
  ['Videographers','Main stage + interview room','2','1 / 2','1 open',50],
  ['On-site editor','Continuous highlights · Picflow','1','Kai Chen','Confirmed',100],
];

const candidates = [
  ['TA','Tariq Abdi','Videographer · interviews','94','4.8','FX6 + audio','8 events','Available all days'],
  ['IH','Ingrid Hauge','Videographer · conference','88','4.6','Canon C70','5 events','Hold on day 2'],
  ['LM','Lars Mikkelsen','Videographer · documentary','82','4.5','Sony FX3','11 events','Partial availability'],
];

function Mark({small=false}) {
  return <span className={`mark ${small?'small':''}`} aria-hidden="true"><i/><b/></span>;
}

function Sidebar({screen,setScreen}) {
  const items = [
    ['dashboard','Events',<DashboardIcon/>], ['coverage','Coverage board',<MixIcon/>],
    ['staffing','Crew',<PersonIcon/>], ['mobile','Field view',<MobileIcon/>],
  ];
  return <aside className="sidebar">
    <div className="brand"><Mark/><div><strong>FrameOps</strong><span>Event operations</span></div></div>
    <Text className="nav-label">OPERATE</Text>
    <nav>{items.map(([value,label,icon]) => <button key={value} className={`nav-item ${screen===value?'active':''}`} onClick={()=>setScreen(value)}>{icon}<span>{label}</span>{screen===value&&<ChevronRightIcon className="arrow"/>}</button>)}</nav>
    <Text className="nav-label library">LIBRARY</Text>
    <button className="nav-item muted"><FileTextIcon/><span>Schedule imports</span></button>
    <button className="nav-item muted"><RowsIcon/><span>Templates</span></button>
    <div className="sidebar-foot"><div className="user"><Avatar fallback="KC" size="2" radius="none"/><div><strong>Kai Chen</strong><span>Administrator</span></div><GearIcon/></div><div className="sync"><i/>All changes synced</div></div>
  </aside>;
}

function Topbar({screen,setScreen}) {
  return <header className="topbar">
    <Flex align="center" gap="3"><Mark small/><Text weight="bold" size="2">FrameOps mockups</Text><Text size="1" color="gray">Radix UI · Transit dispatch</Text></Flex>
    <Tabs.Root value={screen} onValueChange={setScreen} className="screen-tabs"><Tabs.List>
      <Tabs.Trigger value="dashboard">Dashboard</Tabs.Trigger><Tabs.Trigger value="coverage">Coverage</Tabs.Trigger><Tabs.Trigger value="staffing">Staffing</Tabs.Trigger><Tabs.Trigger value="mobile">Mobile</Tabs.Trigger>
    </Tabs.List></Tabs.Root>
    <DropdownMenu.Root><DropdownMenu.Trigger><IconButton variant="soft" color="gray" aria-label="Workspace menu"><HamburgerMenuIcon/></IconButton></DropdownMenu.Trigger><DropdownMenu.Content align="end"><DropdownMenu.Item>Workspace settings</DropdownMenu.Item><DropdownMenu.Item>Integration status</DropdownMenu.Item><DropdownMenu.Separator/><DropdownMenu.Item color="red">Sign out</DropdownMenu.Item></DropdownMenu.Content></DropdownMenu.Root>
  </header>;
}

function PageTitle({eyebrow,title,description,actions}) {
  return <div className="page-title"><div><Heading size="8" weight="medium">{title}</Heading><Text className="page-context">{eyebrow}</Text><Text className="lede">{description}</Text></div><Flex gap="2" wrap="wrap">{actions}</Flex></div>;
}

function NewEventDialog() {
  return <Dialog.Root><Dialog.Trigger><Button><PlusIcon/>New event</Button></Dialog.Trigger><Dialog.Content maxWidth="520px"><Dialog.Title>Create event</Dialog.Title><Dialog.Description size="2" color="gray">Start from a signed contract, a long email thread, or a blank event.</Dialog.Description><Grid columns="3" gap="3" mt="5"><Card className="source"><FileTextIcon/><Text weight="bold" size="2">Contract</Text><Text size="1" color="gray">PDF or Word</Text></Card><Card className="source"><PaperPlaneIcon/><Text weight="bold" size="2">Email thread</Text><Text size="1" color="gray">Paste or connect</Text></Card><Card className="source"><PlusIcon/><Text weight="bold" size="2">Blank event</Text><Text size="1" color="gray">Enter manually</Text></Card></Grid><Callout.Root color="blue" mt="5"><Callout.Icon><GlobeIcon/></Callout.Icon><Callout.Text>Future HubSpot automation can create this automatically when a deal is signed.</Callout.Text></Callout.Root><Flex justify="end" gap="3" mt="5"><Dialog.Close><Button variant="soft" color="gray">Cancel</Button></Dialog.Close><Dialog.Close><Button>Continue</Button></Dialog.Close></Flex></Dialog.Content></Dialog.Root>;
}

function AvatarStack({count}) {
  return <div className="avatar-stack">{people.slice(0,count).map(([initials,name,color])=><Tooltip key={name} content={name}><Avatar fallback={initials} color={color} size="2"/></Tooltip>)}</div>;
}

function Dashboard({setScreen}) {
  const [density,setDensity] = useState('count');
  return <section className="screen">
    <PageTitle eyebrow="EVENT OPERATIONS · OCTOBER 2026" title="Every event, ready to cover." description="A practical view of signed work, crew allocation, schedule readiness and the few things that need attention." actions={<><Button variant="outline" color="gray"><DownloadIcon/>Import contract</Button><NewEventDialog/></>}/>
    <Grid columns="4" className="metrics">{[['08','Upcoming events'],['21/24','Crew roles allocated'],['03','Waiting for schedules'],['01','Uncovered must-cover']].map(([v,l],i)=><Card className="metric" key={l}><Text className="metric-index">0{i+1}</Text><Text className="metric-value">{v}</Text><Text size="1" color="gray">{l}</Text></Card>)}</Grid>
    <Callout.Root color="orange" className="risk"><Callout.Icon><ExclamationTriangleIcon/></Callout.Icon><Callout.Text><strong>Schedule risk:</strong> Bygg Reis Deg starts in 9 days. Agenda v3 includes two new simultaneous sessions.</Callout.Text><Button size="1" variant="soft" color="orange" onClick={()=>setScreen('coverage')}>Review changes <ArrowRightIcon/></Button></Callout.Root>
    <Flex justify="between" align="end" className="section-head"><div><Heading size="3">Upcoming events</Heading><Text size="1" color="gray">Sorted by operational urgency</Text></div><DropdownMenu.Root><DropdownMenu.Trigger><Button variant="outline" color="gray" size="1"><RowsIcon/>{density==='count'?'Crew count':'Crew names'}</Button></DropdownMenu.Trigger><DropdownMenu.Content align="end"><DropdownMenu.RadioGroup value={density} onValueChange={setDensity}><DropdownMenu.RadioItem value="count">Crew count</DropdownMenu.RadioItem><DropdownMenu.RadioItem value="names">Crew names</DropdownMenu.RadioItem></DropdownMenu.RadioGroup></DropdownMenu.Content></DropdownMenu.Root></Flex>
    <div className="event-list">{events.map((e,i)=><Card className="event-row" key={e.name} onClick={()=>i===0&&setScreen('coverage')}><span className={`event-stripe ${e.tone}`}/><div className="event-main"><Text className="event-code">EVT–0{i+18}</Text><Heading size="4">{e.name}</Heading><Text size="1" color="gray">{e.client}</Text></div><Cell label="DATE"><Text weight="bold" size="2">{e.date}</Text><Text size="1" color="gray">{e.days}</Text></Cell><Cell label="SERVICES"><Flex gap="1">{e.services.map(s=><Badge key={s} variant="outline" color="gray" radius="none">{s}</Badge>)}</Flex><Text size="1" color="gray">{e.delivery}</Text></Cell><Cell label={`CREW · ${e.crew}`}>{density==='names'?<Text size="2" weight="medium">{i===0?'Kai, Mia, Jonas +3':i===1?'Kai, Selma, Ola':'Mia, Tariq +2 open'}</Text>:<AvatarStack count={i===0?4:i===1?3:2}/>}</Cell><div className="event-state"><Badge color={e.tone==='green'?'green':e.tone==='orange'?'orange':'blue'} variant="soft" radius="none">{e.state}</Badge><Text size="1" color={e.tone==='green'?'gray':'red'}>{e.warning}</Text><ChevronRightIcon/></div></Card>)}</div>
  </section>;
}

function Cell({label,children}) { return <div className="event-cell"><Text className="cell-label">{label}</Text>{children}</div>; }

const lanes = [['Main stage','Hall A · 800 pax'],['Expo hall','Stands 01–96'],['Press room','Level 2 · 4 min walk'],['Social desk','Media room']];
const routes = [
  [0,12,3,22,'blue','Doors + atmosphere','Kai'],[0,54,24,29,'orange','Opening keynote','Kai + Mia'],[0,12,61,34,'green','Awards + closing','Selma'],
  [1,12,8,32,'green','Stands + interactions','Jonas'],[1,54,47,40,'blue','Sponsor rounds','Ola'],
  [2,12,31,29,'orange','CEO interview rig','Mia + Tariq'],[2,54,57,27,'red','Minister interview','Unassigned'],
  [3,12,40,41,'green','Select + export highlights','Kai'],[3,54,82,15,'orange','Batch 01',''],
];

function Coverage() {
  const [travel,setTravel]=useState(true); const [published,setPublished]=useState(false);
  return <section className="screen"><PageTitle eyebrow="COVERAGE COMMAND CENTER" title="Bygg Reis Deg 26" description="Map every must-cover moment to an available person, with setup time, travel and handoffs visible." actions={<><Button variant="outline" color="gray"><Share1Icon/>Share preview</Button><Dialog.Root><Dialog.Trigger><Button>{published?<CheckCircledIcon/>:<PaperPlaneIcon/>}{published?'Published v3':'Publish v3'}</Button></Dialog.Trigger><Dialog.Content maxWidth="450px"><Dialog.Title>Publish schedule v3?</Dialog.Title><Dialog.Description size="2" color="gray">Six crew members receive the update. Two material changes require acknowledgment.</Dialog.Description><Callout.Root color="orange" mt="4"><Callout.Icon><ExclamationTriangleIcon/></Callout.Icon><Callout.Text>One must-cover interview remains unassigned.</Callout.Text></Callout.Root><Flex justify="end" gap="3" mt="5"><Dialog.Close><Button variant="soft" color="gray">Keep editing</Button></Dialog.Close><Dialog.Close><Button onClick={()=>setPublished(true)}>Publish anyway</Button></Dialog.Close></Flex></Dialog.Content></Dialog.Root></>}/>
    <Card className="event-banner"><div className="banner-main"><Text className="cell-label">EVENT BRIEF</Text><Heading size="5">Bygg Reis Deg 26</Heading><Text size="1" color="gray">Norges Varemesse · Lillestrøm · Photo + video</Text><span className="event-watermark">BRD26</span></div><Fact label="COVERAGE" value="08:00–19:00"/><Fact label="ALLOCATED" value="6 of 7 roles"/><Fact label="STATUS" value={published?'Published v3':'Draft v3'} positive={published}/></Card>
    <Card className="planner-tools"><Select.Root defaultValue="v3"><Select.Trigger/><Select.Content><Select.Item value="v3">Agenda v3 · 16 Oct</Select.Item><Select.Item value="v2">Agenda v2 · 14 Oct</Select.Item><Select.Item value="v1">Agenda v1 · 02 Oct</Select.Item></Select.Content></Select.Root><Select.Root defaultValue="all"><Select.Trigger/><Select.Content><Select.Item value="all">All priorities</Select.Item><Select.Item value="must">Must cover</Select.Item><Select.Item value="important">Important</Select.Item></Select.Content></Select.Root><Separator orientation="vertical"/><Flex gap="2" align="center"><Switch size="1" checked={travel} onCheckedChange={setTravel}/><Text size="1">Travel buffers</Text></Flex><Text size="1" color="gray" className="tool-meta">Last client update 16 Oct · 14:32</Text></Card>
    <div className="coverage-layout"><Card className="timeline"><div className="time-axis"><span>STAGE / TIME</span>{['08','09','10','11','12','13','14','15','16+'].map(t=><span key={t}>{t}</span>)}</div>{lanes.map(([name,note],i)=><div className="lane" key={name}><div className="lane-name"><Text weight="bold" size="2">{name}</Text><Text size="1" color="gray">{note}</Text>{travel&&i===2&&<Badge color="orange" variant="soft" radius="none">12m setup</Badge>}</div><div className="lane-track">{routes.filter(r=>r[0]===i).map(r=><Route key={r[5]} data={r}/>)}{i===0&&<><Node left={27} must/><Node left={65}/><span className="change"><i>14:00 change</i></span></>}{i===2&&<Node left={60} must/>}</div></div>)}</Card><aside className="ops-rail"><Ops title="Operational signals" count="3" items={[["red","Uncovered must-cover","Minister interview · 14:10–14:35"],["orange","Travel buffer too short","Mia has 7 min; recommended 12 min"],["green","Backup confirmed","End-of-day copy · 19:30"]]}/><Ops title="Changes in v3" count="2" items={[["orange","New minister interview","Added by client at 14:32"],["orange","Awards moved +25 min","Affects Selma and social desk"]]} action/><Card className="legend"><Flex justify="between"><Text weight="bold" size="2">Priority legend</Text><Text size="1" color="gray">SHAPE + LABEL</Text></Flex><div><span><i className="must"/>Must cover</span><span><i className="important"/>Important</span><span><i/>Standard</span><span><i className="optional"/>Optional</span></div></Card></aside></div>
  </section>;
}

function Fact({label,value,positive}) { return <div className="fact"><Text className="cell-label">{label}</Text><Text weight="bold" size="2" color={positive?'green':undefined}>{value}</Text></div>; }
function Route({data:[,top,left,width,tone,label,who]}) { return <Tooltip content={`${label}${who?` · ${who}`:''}`}><button className={`route ${tone}`} style={{top,left:`${left}%`,width:`${width}%`}}><i/><span>{label}</span>{who&&<small>{who}</small>}</button></Tooltip>; }
function Node({left,must}) { return <Tooltip content={must?'Must cover':'Important'}><button aria-label={must?'Must cover':'Important'} className={`priority-node ${must?'must':''}`} style={{left:`${left}%`}}/></Tooltip>; }
function Ops({title,count,items,action}) { return <Card className="ops"><Flex justify="between"><Text weight="bold" size="2">{title}</Text><Text className="ops-count">{count}</Text></Flex><Separator my="3"/>{items.map(([tone,name,note])=><div className="ops-item" key={name}><i className={tone}/><div><Text size="1" weight="bold">{name}</Text><Text size="1" color="gray">{note}</Text></div></div>)}{action&&<Button size="1" variant="outline" color="gray" mt="3" className="full">Review change impact</Button>}</Card>; }

function Staffing() {
  return <section className="screen"><PageTitle eyebrow="STAFFING · BYGG REIS DEG 26" title="Six assigned. One role open." description="FrameOps starts with the contracted crew, checks availability and recommends suitable people from the freelancer pool." actions={<><Button variant="outline" color="gray"><CalendarIcon/>Availability</Button><Button><PaperPlaneIcon/>Send requests</Button></>}/><Callout.Root color="orange" className="risk"><Callout.Icon><ExclamationTriangleIcon/></Callout.Icon><Callout.Text><strong>Recommendation:</strong> add one videographer for the new simultaneous interview. Three suitable freelancers are available.</Callout.Text><Button size="1" variant="soft" color="orange">Review</Button></Callout.Root><div className="staff-layout"><div><Flex justify="between" align="end" className="section-head"><div><Heading size="3">Role plan</Heading><Text size="1" color="gray">Contracted requirement compared with allocation</Text></div><Badge variant="outline" color="gray" radius="none">ADMIN ONLY</Badge></Flex><div className="roles">{roles.map(([role,note,need,assigned,status,value])=><Card className="role-row" key={role}><div><Text weight="bold" size="2">{role}</Text><Text size="1" color="gray">{note}</Text></div><div><Text className="cell-label">NEED</Text><Text className="role-number">{need}</Text></div><div><Text className="cell-label">ASSIGNED</Text><Text weight="bold" size="2">{assigned}</Text><Progress size="1" value={value} color={value<100?'orange':'green'}/></div><Badge color={value<100?'orange':'green'} variant="soft" radius="none">{status}</Badge></Card>)}</div></div><Card className="candidate-panel"><div className="candidate-intro"><Text className="cell-label">SMART MATCH</Text><Heading size="4">Recommended freelancers</Heading><Text size="1" color="gray">Availability, experience, private rating and relevant gear.</Text></div><Separator/>{candidates.map((p,i)=><Candidate key={p[1]} person={p} index={i}/>)}</Card></div></section>;
}

function Candidate({person:[initials,name,role,rank,rating,gear,history,state],index}) {
  const [sent,setSent]=useState(false);
  return <div className="candidate"><Flex align="center" gap="3"><Avatar fallback={initials} size="3" color={index===0?'indigo':'gray'}/><div><Text size="2" weight="bold">{name}</Text><Text size="1" color="gray">{role}</Text></div><Text className="match">{rank}</Text></Flex><Flex gap="3" className="candidate-facts"><Text>★ {rating}</Text><Text>{gear}</Text><Text>{history}</Text></Flex><div className="availability">{[0,1,2,3,4].map(d=><i key={d} className={index===1&&d===2?'hold':index===2&&d===1?'busy':''}/>)}</div><Text size="1" color="gray">{state}</Text><Button mt="3" size="1" variant={sent?'soft':'outline'} color={sent?'green':'gray'} className="full" onClick={()=>setSent(true)}>{sent?<CheckCircledIcon/>:<PaperPlaneIcon/>}{sent?'Request sent':'Request availability + rate'}</Button></div>;
}

function MobileView() {
  const [scope,setScope]=useState('mine'); const [ack,setAck]=useState(false);
  const assignments=useMemo(()=>scope==='mine'?[['14:00','Walk to Main stage','4 min route · enter stage left'],['14:10','Opening keynote','Main stage · Kai + Mia · must cover'],['15:00','Select 12 highlights','Social desk · Picflow batch 01']]:[['14:00','Main stage handoff','Kai arrives · Mia stays in press room'],['14:10','Keynote + minister interview','Two simultaneous must-cover sessions'],['15:00','Expo sponsor rounds','Ola · stands 20–46']],[scope]);
  return <section className="screen mobile-screen"><PageTitle eyebrow="MOBILE FIELD VIEW" title="The run sheet in one thumb." description="Published assignments stay available offline. Each person can switch between their own route and the full event for context."/><div className="mobile-showcase"><div className="phone"><div className="phone-status"><Text>13:42</Text><Text>5G · 92%</Text></div><div className="phone-head"><Flex justify="between" align="center"><Flex align="center" gap="2"><Mark small/><Text weight="bold" size="2">FrameOps</Text></Flex><Badge color="green" variant="soft" radius="none"><ReloadIcon/>Offline ready</Badge></Flex><Heading size="5" mt="4">Bygg Reis Deg 26</Heading><Text className="phone-meta"><CalendarIcon/> Day 1 · Fri 18 Oct <SewingPinIcon/> Norges Varemesse</Text></div><Tabs.Root value={scope} onValueChange={setScope} className="mobile-tabs"><Tabs.List><Tabs.Trigger value="mine">My assignments</Tabs.Trigger><Tabs.Trigger value="all">Whole event</Tabs.Trigger></Tabs.List></Tabs.Root><ScrollArea className="phone-scroll" type="hover" scrollbars="vertical"><div className="now"><Text className="now-time">13:30—14:00</Text><Heading size="5">CEO interview rig</Heading><Flex gap="2" my="2"><Badge color="orange" variant="solid" radius="none">NOW</Badge><Badge color="gray" variant="surface" radius="none">MUST COVER</Badge></Flex><Text size="2">Press room · Level 2</Text><Separator my="3"/><Text size="2">Lead: Mia · Kai covers stills. Two-light sit-down. Lav + boom. Frame left for captions.</Text></div><Flex justify="between" mt="4" mb="2"><Text className="cell-label">NEXT</Text><Text className="cell-label">TRAVEL INCLUDED</Text></Flex><div>{assignments.map(([time,title,note])=><div className="run-item" key={time+title}><Text className="run-time">{time}</Text><span className="run-line"><i/></span><div><Text size="2" weight="bold">{title}</Text><Text size="1" color="gray">{note}</Text></div></div>)}</div>{!ack?<Callout.Root color="orange" className="change-callout"><Callout.Icon><UpdateIcon/></Callout.Icon><Callout.Text><strong>Schedule changed</strong><br/>Awards moved from 16:10 to 16:35. Your assignment remains the same.<Button color="orange" size="1" mt="3" onClick={()=>setAck(true)}>Acknowledge</Button></Callout.Text></Callout.Root>:<Callout.Root color="green"><Callout.Icon><CheckCircledIcon/></Callout.Icon><Callout.Text>Acknowledged at 13:42</Callout.Text></Callout.Root>}</ScrollArea><div className="phone-nav"><button className="active"><ClockIcon/>Run sheet</button><button><SewingPinIcon/>Map</button><button><PersonIcon/>Team</button><button><FileTextIcon/>Event</button></div></div><div className="field-notes"><Heading size="7">Designed for the minute that matters.</Heading><Text className="page-context">FIELD PRINCIPLES</Text><Text className="lede">The mobile screen is not a smaller admin dashboard. It is a focused operational instrument: the current assignment is unmistakable, the next movement is visible, and important changes cannot disappear in a WhatsApp thread.</Text>{[['01','Personal by default, full event on demand','Crew avoid noise during live work, while retaining enough context to help each other.'],['02','Priority has shape, not just color','Must-cover items use larger route nodes and explicit labels for fast, accessible scanning.'],['03','Offline status stays visible','The last published schedule remains usable in venues with weak internet.'],['04','Material changes require one tap','Acknowledgment records who has seen a consequential change without adding chat.']].map(([n,t,d])=><div className="principle" key={n}><Text className="principle-num">{n}</Text><div><Text weight="bold" size="2">{t}</Text><Text size="2" color="gray">{d}</Text></div></div>)}</div></div></section>;
}

export default function App(){
  const [screen,setScreen]=useState(()=>new URLSearchParams(window.location.search).get('view')||'dashboard');
  return <Theme appearance="light" accentColor="indigo" grayColor="sage" radius="small" panelBackground="solid"><div className="app-shell"><Sidebar screen={screen} setScreen={setScreen}/><main className="workspace"><Topbar screen={screen} setScreen={setScreen}/>{screen==='dashboard'&&<Dashboard setScreen={setScreen}/>} {screen==='coverage'&&<Coverage/>} {screen==='staffing'&&<Staffing/>} {screen==='mobile'&&<MobileView/>}</main></div></Theme>;
}
